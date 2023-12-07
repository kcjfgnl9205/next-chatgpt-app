import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

interface ReplyProps {
  text: string;
}

const Reply = ({ text }: ReplyProps) => {
  const codeBlock = ({ node, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
      <SyntaxHighlighter
        language={match[1]}
        PreTag='div'
        {...props}
        style={materialDark}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code {...props}>{children}</code>
    );
  };

  return (
    <div className='border-1 border-neutral-500 text-white p-3 rounded-md max-w-xl self-end relative'>
      <div className='flex items-center gap-2 justify-end'>
        <span>Chat GPT</span>
        <Image
          src='/logo_32.png'
          className='mr-3 h-9'
          alt='Flowbite Logo'
          width={32}
          height={32}
        />
      </div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{ code: codeBlock }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};

export default Reply;
