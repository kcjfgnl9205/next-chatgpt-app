'use client';

import { useState } from 'react';
import Message from '@/components/Message/Message';
import Textarea from '@/components/Common/Textarea';

export interface Chat {
  role: 'user' | 'assistant';
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Chat[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (!input || isLoading) return;

    setInput('');
    setLoading(true);

    const userRequest: Chat = {
      role: 'user',
      content: input,
    };

    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({
        messages: [...messages, userRequest],
      }),
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) return;

    let content = '';
    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      const decodedValue = decoder.decode(value);
      content += decodedValue;

      setMessages([
        ...messages,
        userRequest,
        { role: 'assistant', content: content },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      <div className='flex-1 overflow-y-auto px-4 py-8 '>
        <div className='mx-auto max-w-screen-xl'>
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
      </div>

      <div className='p-4 flex items-center'>
        <Textarea
          value={input}
          onChange={handleChange}
          onClick={handleSubmit}
        />
      </div>
    </>
  );
}
