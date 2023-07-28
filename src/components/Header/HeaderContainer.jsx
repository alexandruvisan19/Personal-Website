import { useStore } from '@nanostores/react';
import { $header } from '../../store/headerStore';

export default function HeaderContainer({ children }) {
  const { isMenuVisible } = useStore($header);

  return (
    <>
      <div className='noise dark:bg-[#17191e]'></div>
      <header
        className={`${
          isMenuVisible
            ? 'absolute top-0 right-0 dark:bg-[#17191E] bg-[#d3d3d3] dark:text-white text-black h-screen w-full z-50 duration-200'
            : ''
        } pt-4 sm:pr-1 sm:pl-1`}>
        {children}
      </header>
    </>
  );
}
