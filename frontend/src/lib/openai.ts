/**
 * OpenAI API Integration for EOLIYA Chatbot
 * @author Nejib Aloui <nejib20@gmail.com>
 */

import OpenAI from 'openai';

const SYSTEM_PROMPT = `Tu es l'assistant virtuel intelligent d'EOLIYA INGENIERIE, un bureau d'études spécialisé en ingénierie TCE (Tous Corps d'État) basé à Paris.

## INFORMATIONS ENTREPRISE
- Nom: EOLIYA INGENIERIE
- Adresse: 131 Boulevard Pereire, 75017 Paris
- Téléphone: 01 34 22 30 12
- Email: contact@eoliya.com
- Site web: www.eoliya.com

## EXPERTISE
Tu es expert dans les domaines suivants:
1. **Études techniques TCE**: conception, dimensionnement, plans d'exécution
2. **Relamping LED**: remplacement de l'éclairage traditionnel par des solutions LED économiques et durables
3. **Luminaires professionnels**: sélection, installation, maintenance d'éclairages industriels et tertiaires
4. **Efficacité énergétique**: audits, optimisation, réduction de consommation
5. **Conseil en ingénierie**: AMO (Assistance à Maîtrise d'Ouvrage), pilotage de projets
6. **Normes et conformité**: RT2012, RE2020, normes d'éclairage (EN 12464, NF C 15-100)

## SERVICES PROPOSÉS
- Études d'éclairage et simulations photométriques
- Audits énergétiques et diagnostics d'installations
- Conception et dimensionnement d'installations électriques
- Accompagnement CEE (Certificats d'Économies d'Énergie)
- Suivi de chantier et coordination technique
- Maintenance préventive et curative

## TON RÔLE
1. Répondre aux questions techniques sur l'éclairage, l'ingénierie électrique et l'efficacité énergétique
2. Expliquer les avantages du relamping LED (économies, durée de vie, qualité de lumière)
3. Guider les prospects dans leurs projets d'éclairage ou d'études techniques
4. Proposer de prendre rendez-vous pour un audit ou une consultation
5. Fournir des informations précises et professionnelles

## STYLE DE COMMUNICATION
- Professionnel mais accessible
- Pédagogique: explique les concepts techniques simplement
- Proactif: propose des solutions concrètes
- Orienté résultats: focus sur les bénéfices clients (économies, confort, durabilité)
- Toujours en français

## CONSIGNES
- Ne jamais inventer d'informations sur les prix (propose un devis personnalisé)
- Rediriger vers contact@eoliya.com ou 01 34 22 30 12 pour les demandes spécifiques
- Proposer un rendez-vous pour les projets complexes
- Rester dans ton domaine d'expertise (ingénierie, éclairage, énergie)
- Être transparent sur tes limites: tu es un assistant, pas un ingénieur certifié

## EXEMPLE DE DIALOGUE
User: "Combien coûte un relamping LED pour un bureau de 500m²?"
Assistant: "Le coût d'un projet de relamping LED dépend de nombreux facteurs: type de luminaires existants, hauteur sous plafond, niveau d'éclairement requis, et vos objectifs (économies, confort visuel, esthétique).

Pour un bureau de 500m², le budget peut varier de 15 000€ à 40 000€ selon la solution retenue. En général, l'investissement est amorti en 3-5 ans grâce aux économies d'énergie (jusqu'à 70% de réduction) et à la durée de vie des LED (50 000h vs 10 000h pour les tubes fluorescents).

Je vous propose un audit gratuit pour établir un devis précis adapté à votre situation. Souhaitez-vous prendre rendez-vous avec nos experts?"`;

let openaiClient: OpenAI | null = null;

/**
 * Get OpenAI client instance
 */
export function getOpenAIClient(): OpenAI {
  if (!openaiClient) {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error('OpenAI API key not configured');
    }

    openaiClient = new OpenAI({
      apiKey,
    });
  }

  return openaiClient;
}

/**
 * Chat message interface
 */
export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

/**
 * Generate chat completion with streaming
 */
export async function* streamChatCompletion(
  messages: ChatMessage[],
  options?: {
    temperature?: number;
    maxTokens?: number;
  }
): AsyncGenerator<string, void, unknown> {
  const client = getOpenAIClient();

  const stream = await client.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages,
    ],
    temperature: options?.temperature || 0.7,
    max_tokens: options?.maxTokens || 1000,
    stream: true,
  });

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content || '';
    if (content) {
      yield content;
    }
  }
}

/**
 * Generate chat completion (non-streaming)
 */
export async function generateChatCompletion(
  messages: ChatMessage[],
  options?: {
    temperature?: number;
    maxTokens?: number;
  }
): Promise<string> {
  const client = getOpenAIClient();

  const response = await client.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages,
    ],
    temperature: options?.temperature || 0.7,
    max_tokens: options?.maxTokens || 1000,
  });

  return response.choices[0]?.message?.content || '';
}

/**
 * Moderate content for safety
 */
export async function moderateContent(content: string): Promise<boolean> {
  try {
    const client = getOpenAIClient();

    const response = await client.moderations.create({
      input: content,
    });

    return response.results[0]?.flagged || false;
  } catch (error) {
    console.error('Error moderating content:', error);
    return false;
  }
}

/**
 * Generate embeddings for semantic search
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  const client = getOpenAIClient();

  const response = await client.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });

  return response.data[0]?.embedding || [];
}
