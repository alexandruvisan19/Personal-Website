import { useStore } from '@nanostores/preact';
import { $header } from '../../store/headerStore';

export default function HeaderContainer({ children }) {
  const { isMenuVisible } = useStore($header);

  return (
    <>
      <div className='noise dark:bg-[#17191e]'></div>
      <header
        className={`${
          isMenuVisible
            ? 'absolute top-0 right-0 dark:bg-[#807cd4] bg-[#0003c4] dark:text-white text-black h-screen w-full z-10 bg-heroPattern'
            : ''
        } pt-4 sm:pr-6 sm:pl-6`}>
        {children}
      </header>
    </>
  );
}
