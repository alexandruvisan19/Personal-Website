import { useStore } from '@nanostores/preact';
import { $header } from '../store/headerStore';
import TypeWritter from './TypeWritter';
import { person } from '../data';

const {
  name: { firstname, lastname },
  initials,
} = person;

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
    <div
      class={`sm:flex items-center justify-between w-full ${
        !isMenuVisible ? 'hidden' : 'flex'
      }`}
    >
      <a
        href='/'
        class='font-carter text-3xl text-gray-700 dark:text-gray-200 hover:text-blue-700'
      >
        <TypeWritter
          sentences={[`${firstname} ${lastname}.`, initials]}
          options={{
            writeSpeed: 80,
            deleteSpeed: 150,
            pauseSpeed: 1000,
            caretSpeed: 500,
            isInfinite: true,
            startText: true,
          }}
        />
      </a>
      <ul class='flex'>
        {pages.map(page => (
          <li class='pr-4 pl-4'>
            <a
              className={`${
                currentPath === page.path
                  ? 'underline underline-offset-4 decoration-wavy'
                  : ''
              } text-xl`}
              href={page.path}
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
