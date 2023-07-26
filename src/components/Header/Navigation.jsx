import { useStore } from '@nanostores/react';
import { $header } from '../../store/headerStore';

export default function Navigation({ currentPath }) {
  const { isMenuVisible } = useStore($header);
  const pages = [
    {
      name: 'About',
      path: '/about',
    },
    // {
    //   name: 'Portfolio',
    //   path: '/portfolio',
    // },
    // {
    //   name: 'Blog',
    //   path: '/blog',
    // },
    // {
    //   name: 'Tags',
    //   path: '/tags',
    // },
  ];

  const mobileMenuStylesParent =
    'flex absolute left-0 right-0 top-0 bottom-0 flex-col justify-center z-20';
  const mobileMenuStylesChildren = 'flex-col justify-center';

  return (
    <div
      className={`xl:pr-0 xl:pl-0 pr-4 pl-4 sm:flex items-center sm:justify-between w-full ${
        !isMenuVisible ? 'hidden' : mobileMenuStylesParent
      }`}>
      <a
        href='/'
        className='sm:text-4xl text-5xl dark:text-white animate-textColor'>
        AV.
      </a>

      <ul
        className={`flex text-center ${
          !isMenuVisible ? '' : mobileMenuStylesChildren
        }`}>
        {pages.map((page, i) => (
          <li key={`${page}-${i}`} className='sm:pt-0 pt-8 pr-4 pl-4'>
            <a
              className={`${
                currentPath === page.path
                  ? 'underline underline-offset-4 decoration-wavy'
                  : ''
              } sm:text-xl text-4xl dark:text-white animate-textColor font-semibold`}
              href={page.path}>
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
