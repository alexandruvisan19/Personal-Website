import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useStore } from '@nanostores/preact';
import { $header } from '../store/headerStore';

export default function Hamburger() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { isMenuVisible } = useStore($header);

  function clickHandler() {
    $header.setKey('isMenuVisible', !isMenuVisible);
    setIsHamburgerOpen(prevState => !prevState);
  }

  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const isMobile = window.matchMedia(
          '(max-width: 640px)',
        ).matches;

        if (!isMobile) {
          setIsHamburgerOpen(false);
          $header.setKey('isMenuVisible', false);
        }
      }, 100);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <>
      {!isHamburgerOpen ? (
        <div
          onClick={clickHandler}
          id='hamburger'
          className='sm:hidden inline-block cursor-pointer [&>*]:block [&>*]:w-8 [&>*]:h-[4px] [&>*]:rounded-md [&>*]:bg-white [&>*]:dark:bg-black [&>*]:focus:outline-none'>
          <span className='mb-[5px]'></span>
          <span className='mb-[5px]'></span>
          <span></span>
        </div>
      ) : (
        <button
          onClick={clickHandler}
          type='button'
          class='md:hidden dark:text-white focus:outline-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-[32px] w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='3'
              d='M6 18L18 6M6 6l12 12'></path>
          </svg>
        </button>
      )}
    </>
  );
}
