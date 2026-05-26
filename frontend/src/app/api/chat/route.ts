/**
 * Chat API Route - GPT-4 Streaming
 * @author Nejib Aloui <nejib20@gmail.com>
 */

import { NextRequest } from 'next/server';
import { streamChatCompletion, moderateContent, type ChatMessage } from '@/lib/openai';
import { chatMessageSchema, validateData } from '@/lib/validation';
import { isRateLimited, getClientIdentifier } from '@/lib/rate-limit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * POST /api/chat - Stream chat completion
 */
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientId = getClientIdentifier(request);
    const rateLimit = isRateLimited(`chat:${clientId}`, { max: 20, window: 60000 }); // 20 per minute

    if (rateLimit.limited) {
      return new Response(
        JSON.stringify({
          error: 'Trop de messages. Veuillez patienter avant de continuer la conversation.',
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': '20',
            'X-RateLimit-Remaining': String(rateLimit.remaining),
            'X-RateLimit-Reset': String(rateLimit.resetTime),
          },
        }
      );
    }

    // Parse request body
    const body = await request.json();
    const { messages } = body;

    // Validate messages
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Messages array is required and must not be empty' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Validate last message
    const lastMessage = messages[messages.length - 1];
    const validation = validateData(chatMessageSchema, { message: lastMessage.content });

    if (!validation.success) {
      return new Response(JSON.stringify({ error: 'Message invalide', errors: validation.errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Moderate content
    const isFlagged = await moderateContent(lastMessage.content);
    if (isFlagged) {
      return new Response(
        JSON.stringify({
          error: 'Votre message contient du contenu inapproprié. Veuillez reformuler.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Create streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const chatMessages: ChatMessage[] = messages.map((msg: any) => ({
            role: msg.role,
            content: msg.content,
          }));

          // Stream the completion
          for await (const chunk of streamChatCompletion(chatMessages)) {
            const data = encoder.encode(`data: ${JSON.stringify({ content: chunk })}\n\n`);
            controller.enqueue(data);
          }

          // Send done signal
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error('Error in chat stream:', error);
          const errorMessage = encoder.encode(
            `data: ${JSON.stringify({
              error: 'Erreur lors de la génération de la réponse',
            })}\n\n`
          );
          controller.enqueue(errorMessage);
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
        'X-RateLimit-Remaining': String(rateLimit.remaining - 1),
      },
    });
  } catch (error) {
    console.error('Error in chat API:', error);

    return new Response(
      JSON.stringify({
        error: 'Erreur serveur',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

/**
 * OPTIONS - CORS preflight
 */
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
