import { RiSendPlaneFill } from 'react-icons/ri';

interface TextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: () => void;
}

export default function Textarea({ value, onChange, onClick }: TextareaProps) {
  return (
    <div className='mx-auto max-w-screen-xl flex w-full relative'>
      <textarea
        rows={4}
        placeholder='Message ChatGPT...'
        className='block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg border border-gray-600 resize-none'
        value={value}
        onChange={onChange}
      />
      <RiSendPlaneFill
        onClick={onClick}
        size={32}
        className='absolute md:bottom-3 md:right-3 right-2 text-white p-0.5 rounded-lg transition-colors cursor-pointer'
      />
    </div>
  );
}
