import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { isCartOpen } from "../store/headerStore";

export default function Hamburger() {
  const [toggleHambuger, useToggleHambuger] = useState(false);
  const $isCartOpen = useStore(isCartOpen);

  function clickHandler() {
    isCartOpen.set(!$isCartOpen);
    useToggleHambuger((prevState) => !prevState);
  }

  return (
    <>
      {!toggleHambuger ? (
        <div
          onClick={clickHandler}
          id="hamburger"
          className="inline-block cursor-pointer [&>*]:block [&>*]:w-8 [&>*]:h-1 [&>*]:rounded-md [&>*]:bg-blue-600 [&>*]:dark:bg-blue-500 [&>*]:focus:outline-none"
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
