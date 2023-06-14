import { useStore } from "@nanostores/preact";
import { $header } from "../store/headerStore";

export default function Navigation({ currentPath }) {
  const { isMenuVisible } = useStore($header);
  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Tags",
      path: "/tags",
    },
  ];

  return (
    <div
      id="nav-links"
      class={`${
        !isMenuVisible ? "hidden" : ""
      } md:block w-full top-20 left-12 m-0 [&>a]:px-4`}
    >
      {pages.map((page) => (
        <a
          className={`${
            currentPath === page.path ? "bg-blue-300 rounded" : ""
          }`}
          href={page.path}
        >
          {page.name}
        </a>
      ))}
    </div>
  );
}
