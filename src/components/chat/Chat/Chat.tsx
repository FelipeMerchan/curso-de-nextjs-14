'use client';
 
import { useChat } from 'ai/react';

interface ChatProps {
  aiAgent: string
}
 
export const Chat = ({ aiAgent }: ChatProps) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    /* Mensajes iniciales que le podemos asignar a nuestro chatbox
    para que inicie con algún texto en específico: */
    initialMessages: [
      {
        id: '1',
        role: 'system',
        content: aiAgent,
      }
    ]
  });
 
  return (
    <div>
      <ul>
        {messages.filter((m) => m.role !== 'system').map((m, index) => (
          <li key={index}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </li>
        ))}
      </ul>
 
      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input value={input} onChange={handleInputChange} />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}