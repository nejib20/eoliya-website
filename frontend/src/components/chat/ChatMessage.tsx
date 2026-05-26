/**
 * Chat Message Component
 * @author Nejib Aloui <nejib20@gmail.com>
 */

'use client';

import { motion } from 'framer-motion';
import { User, Bot } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser
            ? 'bg-gradient-to-br from-blue-600 to-blue-700'
            : 'bg-gradient-to-br from-orange-500 to-orange-600'
        }`}
      >
        {isUser ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
      </div>

      {/* Message Bubble */}
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[75%]`}>
        <motion.div
          className={`px-4 py-3 rounded-2xl shadow-sm ${
            isUser
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-tr-sm'
              : 'bg-white text-gray-800 rounded-tl-sm border border-gray-200'
          }`}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
            {message.content}
          </p>
        </motion.div>

        {/* Timestamp */}
        <span className="text-xs text-gray-500 mt-1 px-1">
          {message.timestamp.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
    </motion.div>
  );
}
