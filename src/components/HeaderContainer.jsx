import { useStore } from '@nanostores/preact';
import { $header } from '../store/headerStore';

export default function HeaderContainer({ children }) {
  const { isMenuVisible } = useStore($header);

  return (
    <header
      className={`${
        isMenuVisible
          ? 'absolute top-0 right-0 dark:bg-[#1D267D] bg-[#B0DAFF] dark:text-white text-black h-screen w-full z-10'
          : ''
      } sm:pt-4 pt-4`}
    >
      {children}
    </header>
  );
}