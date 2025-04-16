'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ChatRoom() {
  const params = useParams();
  const router = useRouter();
  const titleSlug = params.titleSlug;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { id: Date.now(), text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white p-4">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="bg-zinc-950 p-4 shadow-md border-b border-pink-400 mb-4"
      >
        <button onClick={() => router.back()} className="text-pink-400 hover:text-white">← Back</button>
      </motion.nav>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="p-4 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-pink-300 mb-4">💬 Chat Room: {titleSlug?.replace(/-/g, ' ')}</h2>
        <div className="bg-zinc-800 p-4 rounded-2xl h-[60vh] overflow-y-auto shadow-inner border border-zinc-700">
          {messages.length === 0 && (
            <p className="text-zinc-400 text-sm">Start the conversation...</p>
          )}
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 15 }}
              className="my-2 p-2 bg-zinc-700 rounded-xl text-sm shadow-md"
            >
              {msg.text}
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 rounded-xl bg-zinc-700 text-white placeholder:text-zinc-400 border border-zinc-600"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
          >
            Send
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}