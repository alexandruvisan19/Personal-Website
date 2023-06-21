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

  const mobileMenuStylesParent =
    'flex absolute left-0 right-0 top-0 bottom-0 flex-col justify-center';
  const mobileMenuStylesChildren = 'flex-col justify-center';

  return (
    <div
      class={`xl:pr-0 xl:pl-0 pr-4 pl-4 sm:flex items-center sm:justify-between w-full ${
        !isMenuVisible ? 'hidden' : mobileMenuStylesParent
      }`}
    >
      <a
        href='/'
        class='font-carter sm:text-3xl text-5xl text-black dark:text-white hover:text-blue-700'
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

      <ul
        class={`flex text-center ${
          !isMenuVisible ? '' : mobileMenuStylesChildren
        }`}
      >
        {pages.map(page => (
          <li class='sm:pt-0 pt-8 pr-4 pl-4'>
            <a
              className={`${
                currentPath === page.path
                  ? 'underline underline-offset-4 decoration-wavy'
                  : ''
              } sm:text-xl text-2xl`}
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
