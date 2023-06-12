import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { $header } from "../store/headerStore";

export default function Hamburger() {
  const [toggleHambuger, useToggleHambuger] = useState(false);
  const { isHamburgerOpen, isMobile } = useStore($header);

  function clickHandler() {
    $header.setKey("isHamburgerOpen", !isHamburgerOpen);
    useToggleHambuger((prevState) => !prevState);
  }

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      $header.setKey("isMobile", isMobile);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <>
      {!toggleHambuger ? (
        <div
          onClick={clickHandler}
          id="hamburger"
          className="inline-block cursor-pointer [&>*]:block [&>*]:w-8 [&>*]:h-[4px] [&>*]:rounded-md [&>*]:bg-blue-600 [&>*]:dark:bg-blue-500 [&>*]:focus:outline-none"
        >
          <span className="mb-[5px]"></span>
          <span className="mb-[5px]"></span>
          <span></span>
        </div>
      ) : (
        <button
          onClick={clickHandler}
          type="button"
          class="text-blue-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[22.4px] w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      )}
    </>
  );
}
