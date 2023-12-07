import { Chat } from '@/page';
import Reply from './Reply';
import Send from './Send';

interface MessageProps {
  message: Chat;
}

export default function Message({ message }: MessageProps) {
  return (
    <div className='flex flex-col space-y-2 py-6'>
      {message.role === 'user' && <Send text={message.content} />}
      {message.role === 'assistant' && <Reply text={message.content} />}
    </div>
  );
}
