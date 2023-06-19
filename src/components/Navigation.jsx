import { useStore } from '@nanostores/preact';
import { $header } from '../store/headerStore';
import TypeWritter from './TypeWritter';

export default function Navigation({ currentPath }) {
  const { isMenuVisible } = useStore($header);
  const pages = [
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'Tags',
      path: '/tags',
    },
  ];

  return (
    <ul class={`${!isMenuVisible ? 'hidden' : ''} sm:flex justify-around`}>
      {pages.map(page => (
        <li class='pr-4 pl-4'>
          <a
            className={`${
              currentPath === page.path
                ? 'underline underline-offset-4 decoration-wavy'
                : ''
            }`}
            href={page.path}
          >
            {page.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
