// app/Chatbot.tsx
'use client';

import { useState } from 'react';

export default function Chatbot() {
  const [history, setHistory] = useState<{ role: 'user'|'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    setHistory(h => [...h, { role: 'user', text: input }]);
    setLoading(true);
    const prompt = input;
    setInput('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const { text, error } = await res.json();
    setHistory(h => [
      ...h,
      { role: 'bot', text: error ? `Error: ${error}` : text || 'No reply' },
    ]);
    setLoading(false);
  }

  return (
    <div className="bg-gray-900/75 backdrop-blur-sm rounded-xl p-4 max-w-xl mx-auto">
      <div className="h-64 overflow-auto mb-4">
        {history.map((m,i) => (
          <p key={i} className={m.role==='user'?'text-white':'text-green-300'}>
            <strong>{m.role==='user'?'You:':'Bot:'}</strong> {m.text}
          </p>
        ))}
        {loading && <p className="text-gray-400">Thinking…</p>}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==='Enter' && send()}
          className="flex-1 px-4 py-2 rounded-md bg-black text-white focus:ring-2 focus:ring-blue-500"
          placeholder="Ask me about my skills, projects, resume…"
          disabled={loading}
        />
        <button
          onClick={send}
          disabled={loading}
          className="px-4 bg-blue-600 rounded-md text-white disabled:opacity-50"
        >
          {loading ? '…' : 'Send'}
        </button>
      </div>
    </div>
  );
}
