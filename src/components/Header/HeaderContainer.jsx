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
            ? 'relative top-0 right-0 bg-opacity-80 dark:bg-[#17191e] bg-[#d3d3d3] dark:text-white text-black h-screen w-full z-10'
            : ''
        } pt-4 sm:pr-6 sm:pl-6`}>
        {children}
      </header>
    </>
  );
}
