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

  console.log(currentPath);
  console.log(pages);

  return (
    <div
      id="nav-links"
      class={`${
        !isMenuVisible ? "hidden" : ""
      } sm:block w-full top-20 left-12 m-0 text-lg [&>a]:px-4`}
    >
      {pages.map((page) => (
        <a
          className={`${
            currentPath === page.path
              ? "underline underline-offset-4 decoration-wavy"
              : ""
          }`}
          href={page.path}
        >
          {page.name}
        </a>
      ))}
    </div>
  );
}
