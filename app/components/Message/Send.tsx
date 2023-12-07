import { HiOutlineUser } from 'react-icons/hi';

interface SendProps {
  text: string;
}

export default function Send({ text }: SendProps) {
  return (
    <div className='border-1 border-neutral-500 text-white p-3 rounded-md max-w-xl self-start'>
      <div className='flex items-center gap-2'>
        <HiOutlineUser size={22} /> <span>나</span>
      </div>
      <p>{text}</p>
    </div>
  );
}
