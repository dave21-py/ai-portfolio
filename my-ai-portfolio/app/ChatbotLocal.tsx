// components/ChatbotLocal.tsx
'use client';

import { useState, useEffect } from 'react';
import { GPT4All } from 'gpt4all';

export function ChatbotLocal() {
  const [bot, setBot] = useState<GPT4All|null>(null);
  const [msgs, setMsgs] = useState<string[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    (async () => {
      const instance = new GPT4All({ model: '/models/gpt4all-lora-quantized.bin' });
      await instance.load();
      setBot(instance);
    })();
  }, []);

  async function onSend() {
    const convo = [...msgs, `User: ${input}`, 'Assistant:'];
    setMsgs(convo);
    setInput('');

    if (!bot) return;
    const resp = await bot.chat({
      messages: convo,
      max_tokens: 128,
    });
    setMsgs([...convo, resp]);
  }

  return (
    <div>
      <div className="h-48 overflow-auto">
        {msgs.map((m,i) => <p key={i}>{m}</p>)}
      </div>
      <input
        value={input}
        onChange={e=>setInput(e.target.value)}
      />
      <button onClick={onSend}>Send</button>
    </div>
  );
}
