import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className='bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5 box-content'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/logo_32.png'
              className='mr-3 h-9'
              alt='Flowbite Logo'
              width={32}
              height={32}
            />
            <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
              ChatGPT
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
