/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, _ as __astro_tag_component__, b as renderComponent, d as renderSlot, e as renderHead, f as addAttribute, g as createVNode, s as spreadAttributes, F as Fragment$1 } from './astro.2923ecff.mjs';
import { useState, useEffect, useRef } from 'react';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
/* empty css                          */import rss, { pagesGlobToRssItems } from '@astrojs/rss';
/* empty css                          */import { Slider } from 'react-slick';
import { Icon } from '@iconify/react';
/* empty css                           */import { useStore } from '@nanostores/react';
import { map } from 'nanostores';

const person = {
  name: {
    firstname: "Alex",
    surname: "Cristian",
    lastname: "Vișan"
  },
  initials: "AV.",
  age: (/* @__PURE__ */ new Date()).getFullYear() - 1993
};
const social = {
  linkedin: {
    name: "linkedin",
    link: "https://www.linkedin.com/in/visan-alexandru/"
  },
  github: {
    name: "github",
    link: "https://www.github.com/alexandruvisan19"
  },
  codewars: {
    name: "codewars",
    link: "https://www.codewars.com/users/Karagk19"
  }
};

const $$Astro$b = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  const {
    name: { firstname, surname, lastname }
  } = person;
  return renderTemplate`${maybeRenderHead($$result)}<div class="divider"></div>
<footer class="m-auto pb-4 lg:pr-4 lg:pl-4">
  <div>
    <p class="dark:text-white text-black text-sm">
      © ${( new Date()).getFullYear()}
      ${`${firstname} ${surname} ${lastname}`} - All rights reserved.
    </p>
  </div>
</footer>`;
}, "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/components/Footer.astro");

const $header = map({
  isMenuVisible: false
});

function Hamburger() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const {
    isMenuVisible
  } = useStore($header);
  function clickHandler() {
    $header.setKey("isMenuVisible", !isMenuVisible);
    setIsHamburgerOpen((prevState) => !prevState);
  }
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const isMobile = window.matchMedia("(max-width: 640px)").matches;
        if (!isMobile) {
          setIsHamburgerOpen(false);
          $header.setKey("isMenuVisible", false);
        }
      }, 100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  return /* @__PURE__ */ jsx(Fragment, {
    children: !isHamburgerOpen ? /* @__PURE__ */ jsxs("div", {
      onClick: clickHandler,
      id: "hamburger",
      className: "sm:hidden inline-block cursor-pointer [&>*]:block [&>*]:w-8 [&>*]:h-[4px] [&>*]:rounded-md [&>*]:bg-black [&>*]:dark:bg-white [&>*]:focus:outline-none",
      children: [/* @__PURE__ */ jsx("span", {
        className: "mb-[5px]"
      }), /* @__PURE__ */ jsx("span", {
        className: "mb-[5px]"
      }), /* @__PURE__ */ jsx("span", {})]
    }) : /* @__PURE__ */ jsx("button", {
      onClick: clickHandler,
      type: "button",
      class: "md:hidden dark:text-white text-black focus:outline-none",
      children: /* @__PURE__ */ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: "h-[32px] w-8",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsx("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "3",
          d: "M6 18L18 6M6 6l12 12"
        })
      })
    })
  });
}
__astro_tag_component__(Hamburger, "@astrojs/react");

function HeaderContainer({
  children
}) {
  const {
    isMenuVisible
  } = useStore($header);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: "noise dark:bg-[#17191e]"
    }), /* @__PURE__ */ jsx("header", {
      className: `${isMenuVisible ? "absolute top-0 right-0 dark:bg-[#17191E] bg-[#d3d3d3] dark:text-white text-black h-screen w-full z-50 duration-200" : ""} pt-4 sm:pr-6 sm:pl-6`,
      children
    })]
  });
}
__astro_tag_component__(HeaderContainer, "@astrojs/react");

function Navigation({
  currentPath
}) {
  const {
    isMenuVisible
  } = useStore($header);
  const pages = [
    {
      name: "About",
      path: "/about"
    }
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
  const mobileMenuStylesParent = "flex absolute left-0 right-0 top-0 bottom-0 flex-col justify-center z-20";
  const mobileMenuStylesChildren = "flex-col justify-center";
  return /* @__PURE__ */ jsxs("div", {
    class: `xl:pr-0 xl:pl-0 pr-4 pl-4 sm:flex items-center sm:justify-between w-full ${!isMenuVisible ? "hidden" : mobileMenuStylesParent}`,
    children: [/* @__PURE__ */ jsx("a", {
      href: "/",
      class: "sm:text-4xl text-5xl dark:text-white animate-textColor",
      children: "AV."
    }), /* @__PURE__ */ jsx("ul", {
      class: `flex text-center ${!isMenuVisible ? "" : mobileMenuStylesChildren}`,
      children: pages.map((page) => /* @__PURE__ */ jsx("li", {
        class: "sm:pt-0 pt-8 pr-4 pl-4",
        children: /* @__PURE__ */ jsx("a", {
          className: `${currentPath === page.path ? "underline underline-offset-4 decoration-wavy" : ""} sm:text-xl text-4xl dark:text-white animate-textColor font-semibold`,
          href: page.path,
          children: page.name
        })
      }))
    })]
  });
}
__astro_tag_component__(Navigation, "@astrojs/react");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$a = createAstro();
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  const cookie = Astro2.cookies.get("theme");
  if (cookie?.value) {
    cookie.value;
  }
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<button id="themeToggle" class="astro-N5CD7LW7">
  <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="astro-N5CD7LW7">
    <path class="sun astro-N5CD7LW7" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"></path>
    <path class="moon astro-N5CD7LW7" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"></path>
  </svg>
</button>



<script>
const handleToggleClick = () => {
  const element = document.documentElement;
  element.classList.toggle('dark');

  const isDark = element.classList.contains('dark');
  document.cookie = \`theme=\${isDark ? 'dark' : 'light'}; path=/\`;
};

document
  .getElementById('themeToggle')
  ?.addEventListener('click', handleToggleClick);
<\/script>`], ["", `<button id="themeToggle" class="astro-N5CD7LW7">
  <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="astro-N5CD7LW7">
    <path class="sun astro-N5CD7LW7" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"></path>
    <path class="moon astro-N5CD7LW7" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"></path>
  </svg>
</button>



<script>
const handleToggleClick = () => {
  const element = document.documentElement;
  element.classList.toggle('dark');

  const isDark = element.classList.contains('dark');
  document.cookie = \\\`theme=\\\${isDark ? 'dark' : 'light'}; path=/\\\`;
};

document
  .getElementById('themeToggle')
  ?.addEventListener('click', handleToggleClick);
<\/script>`])), maybeRenderHead($$result));
}, "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/components/Header/ThemeIcon.astro");

const $$Astro$9 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$2;
  let currentPath = new URL(Astro2.url).pathname;
  if (currentPath.charAt(currentPath.length - 1) === "/" && currentPath.length !== 1) {
    currentPath = currentPath.slice(0, -1);
  }
  return renderTemplate`${renderComponent($$result, "HeaderContainer", HeaderContainer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/components/Header/HeaderContainer", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<nav class="sm:flex sm:flex-row-reverse items-center max-w-7xl mx-auto">
    <div class="flex justify-between items-center pr-4 pl-4 relative z-50">
      ${renderComponent($$result2, "Hamburger", Hamburger, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/components/Header/Hamburger", "client:component-export": "default" })}
      ${renderComponent($$result2, "ThemeIcon", $$ThemeIcon, {})}
    </div>
    ${renderComponent($$result2, "Navigation", Navigation, { "client:load": true, "currentPath": currentPath, "client:component-hydration": "load", "client:component-path": "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/components/Header/Navigation", "client:component-export": "default" })}
  </nav>
` })}
<div class="divider"></div>`;
}, "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/components/Header/index.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$8 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n    <meta name="viewport" content="width=device-width">\n    <meta name="generator"', ">\n    <title>", "</title>\n    <script>\n      const theme = (() => {\n        if (typeof document !== 'undefined') {\n          const cookie = document.cookie\n            .split('; ')\n            .find(row => row.startsWith('theme='));\n\n          if (cookie) {\n            return cookie.split('=')[1];\n          }\n        }\n\n        if (\n          window.matchMedia('(prefers-color-scheme: dark)').matches\n        ) {\n          return 'dark';\n        }\n\n        return 'light';\n      })();\n\n      if (theme === 'light') {\n        document.documentElement.classList.remove('dark');\n      } else {\n        document.documentElement.classList.add('dark');\n      }\n    <\/script>\n  ", '</head>\n  <body class="dark:bg-[#17191e] bg-[#faf0f0] duration-500">\n    <div class="flex flex-col min-h-screen overflow-x-hidden">\n      ', '\n\n      <main class="flex flex-1 flex-col z-10 isolate max-w-7xl mx-auto w-full dark:text-white text-black">\n        ', "\n      </main>\n\n      ", "\n    </div>\n  </body></html>"])), addAttribute(Astro2.generator, "content"), pageTitle, renderHead($$result), renderComponent($$result, "Header", $$Index$2, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/layouts/BaseLayout.astro");

function TypeWritter({
  sentences,
  options
}) {
  const [currentText, setCurrentText] = useState("");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [visibleCaret, setVisibleCaret] = useState(false);
  const {
    writeSpeed,
    deleteSpeed,
    pauseSpeed,
    caretSpeed,
    isInfinite,
    startText
  } = options;
  const [hasStartText, setHasStartText] = useState(startText);
  const startNextSentence = () => {
    setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
    setCurrentText("");
  };
  const startTypingEffect = () => {
    let index = 0;
    setCurrentText(sentences[currentSentenceIndex].charAt(0));
    if (hasStartText) {
      index = sentences[currentSentenceIndex].length - 1;
      setCurrentText(sentences[0]);
    }
    const additionInterval = setInterval(() => {
      if (index < sentences[currentSentenceIndex].length && !hasStartText) {
        setCurrentText((prevText) => {
          return prevText + sentences[currentSentenceIndex].charAt(index);
        });
        index++;
      } else {
        clearInterval(additionInterval);
        setTimeout(() => startCharacterSubtraction(index), pauseSpeed);
        setHasStartText(false);
      }
    }, writeSpeed);
  };
  const startCharacterSubtraction = (index) => {
    if (currentSentenceIndex === sentences.length - 1 && isInfinite) {
      return;
    }
    const substractInterval = setInterval(() => {
      if (index >= 0) {
        setCurrentText((prevText) => prevText.slice(0, index));
        index--;
      } else {
        clearInterval(substractInterval);
        startNextSentence();
      }
    }, deleteSpeed);
  };
  useEffect(() => {
    if (currentSentenceIndex < sentences.length) {
      setTimeout(() => {
        startTypingEffect();
      }, hasStartText ? 0 : pauseSpeed);
    }
    if (currentSentenceIndex === sentences.length) {
      setCurrentSentenceIndex(0);
    }
  }, [currentSentenceIndex]);
  useEffect(() => {
    const caretInterval = setInterval(() => {
      if (currentSentenceIndex === sentences.length - 1 && isInfinite) {
        setVisibleCaret(false);
        return;
      }
      setVisibleCaret((prevCaret) => !prevCaret);
    }, caretSpeed);
    return () => {
      clearInterval(caretInterval);
    };
  }, [currentSentenceIndex]);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("p", {
      className: "text-5xl leading-tight mt-3 mb-3",
      children: [/* @__PURE__ */ jsx("i", {
        children: hasStartText ? sentences[0] : currentText
      }), visibleCaret ? /* @__PURE__ */ jsx("span", {
        children: "|"
      }) : /* @__PURE__ */ jsx("span", {
        className: "inline-block w-0 sm:ml-3 ml-0",
        children: " "
      })]
    })
  });
}
__astro_tag_component__(TypeWritter, "@astrojs/react");

function Modal({
  children
}) {
  const closeRef = useRef(null);
  function closeModal() {
    closeRef.current.close();
  }
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("dialog", {
      id: "my_modal_1",
      className: "modal",
      ref: closeRef,
      children: /* @__PURE__ */ jsxs("form", {
        className: "modal-box",
        action: "https://formsubmit.co/019c6aa344dc85907f6dc9a99ac9e911",
        method: "POST",
        children: [/* @__PURE__ */ jsx("button", {
          onClick: closeModal,
          type: "button",
          className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
          children: "✕"
        }), children, /* @__PURE__ */ jsxs("label", {
          className: "block relative mb-5",
          for: "",
          children: [/* @__PURE__ */ jsx("span", {
            className: "i-mdi-account text-2xl absolute top-[0.7rem] left-2"
          }), /* @__PURE__ */ jsx("input", {
            name: "Name",
            type: "text",
            placeholder: "Name",
            className: "input input-bordered input-info w-full max-w-lg pl-10 text-lg"
          })]
        }), /* @__PURE__ */ jsxs("label", {
          className: "block relative mb-5",
          for: "",
          children: [/* @__PURE__ */ jsx("span", {
            className: "i-mdi-email text-2xl absolute top-[0.7rem] left-2"
          }), /* @__PURE__ */ jsx("input", {
            name: "email",
            type: "email",
            placeholder: "Email",
            className: "input input-bordered input-info w-full max-w-lg pl-10 text-lg"
          })]
        }), /* @__PURE__ */ jsxs("label", {
          className: "block relative mb-5",
          for: "",
          children: [/* @__PURE__ */ jsx("span", {
            className: "i-mdi-fountain-pen-tip text-2xl absolute top-[0.7rem] left-2"
          }), /* @__PURE__ */ jsx("textarea", {
            name: "message",
            rows: "4",
            className: "textarea textarea-bordered textarea-info pl-10 text-lg w-full max-w-lg",
            placeholder: "Message"
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "modal-middle",
          children: /* @__PURE__ */ jsx("button", {
            type: "submit",
            className: "btn btn-info btn-outline",
            children: "Send"
          })
        })]
      })
    })
  });
}
__astro_tag_component__(Modal, "@astrojs/react");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$1;
  const pageTitle = "Home Page";
  const { linkedin, github } = social;
  const { name } = person;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["\n  ", `<section id="first-section" class="text-black dark:text-white p-4 flex-grow relative before:main-noise before:animate-backgroundColor flex items-center justify-center duration-700 astro-J7PV25F6">
    <div class="text-center astro-J7PV25F6">
      <h2 class="inline font-bold drop-shadow-xl text-5xl leading-tight md:text-6xl astro-J7PV25F6">
        Hey there! <span class="relative bottom-1 right-1 text-5xl md:text-7xl inline-block animate-wave origin-[70%_70%] astro-J7PV25F6">\u{1F44B}</span>, I'm `, ` and I'm
        <span class="astro-J7PV25F6">
          `, '</span>\n      </h2>\n      <button id="contactBtn" class="btn btn-info mt-6 bg-noisePattern drop-shadow-xl hover:bg-slate-50 text-black font-extrabold text-lg astro-J7PV25F6">Contact me</button>\n      <div class="flex justify-center mt-6 astro-J7PV25F6">\n        <a', ' class="astro-J7PV25F6"><span class="i-mdi-linkedin text-4xl ml-2 mr-2 astro-J7PV25F6"></span></a>\n        <a', ' class="astro-J7PV25F6"><span class="i-mdi-github text-4xl ml-2 mr-2 astro-J7PV25F6"></span></a>\n      </div>\n    </div>\n  </section>\n  ', "\n\n  <script>\n    document\n      .getElementById('contactBtn')\n      ?.addEventListener('click', () => {\n        window?.document.getElementById('my_modal_1')?.showModal();\n      });\n  <\/script>\n"])), maybeRenderHead($$result2), name.firstname, renderComponent($$result2, "TypeWritter", TypeWritter, { "client:load": true, "sentences": [
    "from Romania.",
    "a frontend developer.",
    "a software engineer.",
    "a tech enthusiast.",
    "open for new ideas."
  ], "options": {
    writeSpeed: 50,
    deleteSpeed: 50,
    pauseSpeed: 1300,
    caretSpeed: 500,
    isInfinite: false,
    startText: false
  }, "client:component-hydration": "load", "client:component-path": "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/components/TypeWritter", "client:component-export": "default", "class": "astro-J7PV25F6" }), addAttribute(linkedin.link, "href"), addAttribute(github.link, "href"), renderComponent($$result2, "Modal", Modal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/components/Modal", "client:component-export": "default", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
    <h3 class="font-bold text-4xl mb-4 astro-J7PV25F6">Contact me</h3>
    <p class="py-4 text-xl mb-4 astro-J7PV25F6">
      Interested in a conversation? I'll reply as fast as I can 👌
    </p>
  ` })) })}`;
}, "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/index.astro");

const $$file$5 = "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/index.astro";
const $$url$5 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Portfolio;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div>Portfolio Page</div>
` })}`;
}, "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/portfolio.astro");

const $$file$4 = "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/portfolio.astro";
const $$url$4 = "/portfolio";

const portfolio = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

async function get() {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://portfolio-alex-visan.netlify.app/",
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => Promise.resolve().then(() => post1),"./posts/post-2.md": () => Promise.resolve().then(() => post2),"./posts/post-3.md": () => Promise.resolve().then(() => post3),"./posts/post-4.md": () => Promise.resolve().then(() => post4)})),
    customData: `<language>en-us</language>`,
  });
}

const rss_xml = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const skills = [{
  name: "HTML",
  logo: "logos:html-5"
}, {
  name: "CSS",
  logo: "logos:css-3"
}, {
  name: "SASS",
  logo: "logos:sass"
}, {
  name: "JavaScript",
  logo: "logos:javascript"
}, {
  name: "Typescript",
  logo: "logos:typescript-icon"
}, {
  name: "React",
  logo: "logos:react"
}, {
  name: "Redux Toolkit",
  logo: "logos:redux"
}, {
  name: "Testing Library",
  logo: "logos:testing-library"
}, {
  name: "Jest",
  logo: "logos:jest"
}, {
  name: "Preact",
  logo: "logos:preact"
}, {
  name: "NextJS",
  logo: "logos:nextjs-icon"
}, {
  name: "Gatsby",
  logo: "logos:gatsby"
}, {
  name: "Astro",
  logo: "logos:astro-icon"
}, {
  name: "Graphql",
  logo: "logos:graphql"
}, {
  name: "Parcel",
  logo: "logos:parcel-icon"
}, {
  name: "Netlify",
  logo: "logos:netlify-icon"
}, {
  name: "Vercel",
  logo: "logos:vercel-icon"
}, {
  name: "Wordpress",
  logo: "logos:wordpress-icon"
}];
function SliderComponent() {
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2e3,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    }]
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "md:w-[35rem] w-full m-auto",
    children: [/* @__PURE__ */ jsx("h3", {
      className: "text-xl text-center mb-8",
      children: "Technologies I'm familiar with:"
    }), /* @__PURE__ */ jsx(Slider, {
      ...settings,
      className: "text-center",
      children: skills.map((skill) => /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("span", {
          className: "text-[0.7rem] font-bold relative bottom-2",
          children: skill.name
        }), /* @__PURE__ */ jsx(Icon, {
          icon: skill.logo,
          width: 40,
          height: 40,
          className: "m-auto"
        })]
      }))
    })]
  });
}
__astro_tag_component__(SliderComponent, "@astrojs/react");

const $$Astro$5 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Me";
  const identity = {
    firstName: "Alex",
    country: "Romania",
    occupation: "Frontend Engineer",
    hobbies: ["travel", "read"]
  };
  const { firstName, country, occupation, hobbies } = identity;
  const [hobbyNumberOne, hobbyNumberTwo] = hobbies;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1 class="text-center text-4xl font-semibold">About me</h1>
  <div class="block justify-around items-center md:flex">
    <div class="md:w-[35rem] w-full p-8 md:m-[0 auto] m-auto">
      <img class="rounded-xl shadow-2xl" src="/src/assets/20210519193557_IMG_0927.JPG" alt="Alex Visan">
    </div>

    <div class="p-10">
      <ul>
        <li>My name is ${firstName}.</li>
        <li>
          I live in ${country} and I work as a ${occupation}, working on
          web projects and creating beautiful user interfaces. I
          strive to create an intuitive and enjoyable experience for
          users, while also keeping the code clean and organized.
        </li>
        <li>
          I've been working in the software industry for over 5 years
          starting as a Quality Assurance, gaining experience while
          learning the basics of user experience as an Email Marketer,
          and finally finding my stride as a Software Engineer.
        </li>
        <li>
          While over these years I have gained a lot of experience in
          both testing code and front-end, my passion lies in the
          front-end using new technologies and frameworks to create
          interactive websites.
        </li>
        <li>
          When I'm not coding, I like to: ${hobbyNumberOne} and${" "}
          ${hobbyNumberTwo}
        </li>
      </ul>
    </div>
  </div>
  ${renderComponent($$result2, "Slider", SliderComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/components/Slider", "client:component-export": "default" })}
` })}`;
}, "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/about.astro");

const $$file$3 = "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/about.astro";
const $$url$3 = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1>${frontmatter.title}</h1>
  <p>Published on: ${frontmatter.pubDate.slice(0, 10)}</p>
  <p>Written by ${frontmatter.author}</p>
  <p><em>${frontmatter.description}</em></p>
  <img width="300"${addAttribute(frontmatter.image.url, "src")}${addAttribute(frontmatter.image.alt, "alt")}>

  <div class="tags">
    ${frontmatter.tags.map((tag) => renderTemplate`<p class="tag">
          <a${addAttribute(`/tags/${tag}`, "href")}>${tag}</a>
        </p>`)}
  </div>

  ${renderSlot($$result2, $$slots["default"])}
` })}`;
}, "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/layouts/MarkdownPostLayout.astro");

const images$3 = {
					
				};

				function updateImageReferences$3(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images$3[imagePath].src, ...images$3[imagePath].attributes})
					);
				}

				const html$3 = updateImageReferences$3("<p>Welcome to my <em>new blog</em> about learning Astro! Here, I will share my learning journey as I build a new website.</p>\n<h2 id=\"what-ive-accomplished\">What I’ve accomplished</h2>\n<ol>\n<li>\n<p><strong>Installing Astro</strong>: First, I created a new Astro project and set up my online accounts.</p>\n</li>\n<li>\n<p><strong>Making Pages</strong>: I then learned how to make pages by creating new <code>.astro</code> files and placing them in the <code>src/pages/</code> folder.</p>\n</li>\n<li>\n<p><strong>Making Blog Posts</strong>: This is my first blog post! I now have Astro pages and Markdown posts!</p>\n</li>\n</ol>\n<h2 id=\"whats-next\">What’s next</h2>\n<p>I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.</p>");

				const frontmatter$3 = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My First Blog Post","author":"Astro Learner","pubDate":"2022-07-01T00:00:00.000Z","description":"This is the first post of my new Astro blog.","image":{"url":"https://docs.astro.build/assets/full-logo-light.png","alt":"The full Astro logo."},"tags":["astro","blogging","learning in public"]};
				const file$3 = "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/posts/post-1.md";
				const url$3 = "/posts/post-1";
				function rawContent$3() {
					return "\r\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\r\n\r\n## What I've accomplished\r\n\r\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\r\n\r\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\r\n\r\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\r\n\r\n## What's next\r\n\r\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.\r\n";
				}
				function compiledContent$3() {
					return html$3;
				}
				function getHeadings$3() {
					return [{"depth":2,"slug":"what-ive-accomplished","text":"What I’ve accomplished"},{"depth":2,"slug":"whats-next","text":"What’s next"}];
				}
				async function Content$3() {
					const { layout, ...content } = frontmatter$3;
					content.file = file$3;
					content.url = url$3;
					const contentFragment = createVNode(Fragment$1, { 'set:html': html$3 });
					return createVNode($$MarkdownPostLayout, {
									file: file$3,
									url: url$3,
									content,
									frontmatter: content,
									headings: getHeadings$3(),
									rawContent: rawContent$3,
									compiledContent: compiledContent$3,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$3[Symbol.for('astro.needsHeadRendering')] = false;

const post1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$3,
  compiledContent: compiledContent$3,
  default: Content$3,
  file: file$3,
  frontmatter: frontmatter$3,
  getHeadings: getHeadings$3,
  images: images$3,
  rawContent: rawContent$3,
  url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

const images$2 = {
					
				};

				function updateImageReferences$2(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images$2[imagePath].src, ...images$2[imagePath].attributes})
					);
				}

				const html$2 = updateImageReferences$2("<p>After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!\r\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>");

				const frontmatter$2 = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Second Blog Post","author":"Astro Learner","pubDate":"2022-07-08T00:00:00.000Z","description":"After learning some Astro, I couldn't stop!","image":{"url":"https://docs.astro.build/assets/arc.webp","alt":"Thumbnail of Astro arcs,"},"tags":["astro","blogging","learning in public","successes"]};
				const file$2 = "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/posts/post-2.md";
				const url$2 = "/posts/post-2";
				function rawContent$2() {
					return "\r\nAfter a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!\r\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. \r\n";
				}
				function compiledContent$2() {
					return html$2;
				}
				function getHeadings$2() {
					return [];
				}
				async function Content$2() {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;
					const contentFragment = createVNode(Fragment$1, { 'set:html': html$2 });
					return createVNode($$MarkdownPostLayout, {
									file: file$2,
									url: url$2,
									content,
									frontmatter: content,
									headings: getHeadings$2(),
									rawContent: rawContent$2,
									compiledContent: compiledContent$2,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$2[Symbol.for('astro.needsHeadRendering')] = false;

const post2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$2,
  compiledContent: compiledContent$2,
  default: Content$2,
  file: file$2,
  frontmatter: frontmatter$2,
  getHeadings: getHeadings$2,
  images: images$2,
  rawContent: rawContent$2,
  url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const images$1 = {
					
				};

				function updateImageReferences$1(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images$1[imagePath].src, ...images$1[imagePath].attributes})
					);
				}

				const html$1 = updateImageReferences$1("<p>It wasn’t always smooth sailing, but I’m enjoying building with Astro. And, the <a href=\"https://astro.build/chat\">Discord community</a> is really friendly and helpful!</p>");

				const frontmatter$1 = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Third Blog Post","author":"Astro Learner","pubDate":"2022-07-15T00:00:00.000Z","description":"I had some challenges, but asking in the community really helped!","image":{"url":"https://docs.astro.build/assets/rays.webp","alt":"Thumbnail of Astro rays."},"tags":["astro","learning in public","setbacks","community"]};
				const file$1 = "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/posts/post-3.md";
				const url$1 = "/posts/post-3";
				function rawContent$1() {
					return "\r\nIt wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!\r\n";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [];
				}
				async function Content$1() {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;
					const contentFragment = createVNode(Fragment$1, { 'set:html': html$1 });
					return createVNode($$MarkdownPostLayout, {
									file: file$1,
									url: url$1,
									content,
									frontmatter: content,
									headings: getHeadings$1(),
									rawContent: rawContent$1,
									compiledContent: compiledContent$1,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$1[Symbol.for('astro.needsHeadRendering')] = false;

const post3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  compiledContent: compiledContent$1,
  default: Content$1,
  file: file$1,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  images: images$1,
  rawContent: rawContent$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>This post should show up with my other blog posts, because <code>Astro.glob()</code> is returning a list of all my posts in order to create my list.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Fourth Blog Post","author":"Astro Learner","description":"This post will show up on its own!","image":{"url":"https://docs.astro.build/default-og-image.png","alt":"The word “astro” against an illustration of planets and stars."},"pubDate":"2022-08-08T00:00:00.000Z","tags":["astro","successes"]};
				const file = "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/posts/post-4.md";
				const url = "/posts/post-4";
				function rawContent() {
					return "\r\nThis post should show up with my other blog posts, because `Astro.glob()` is returning a list of all my posts in order to create my list.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment$1, { 'set:html': html });
					return createVNode($$MarkdownPostLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const post4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  images,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li>
  <a${addAttribute(url, "href")}>${title}</a>
</li>`;
}, "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/components/BlogPost.astro");

const $$Astro$2 = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => Promise.resolve().then(() => post1),"./posts/post-2.md": () => Promise.resolve().then(() => post2),"./posts/post-3.md": () => Promise.resolve().then(() => post3),"./posts/post-4.md": () => Promise.resolve().then(() => post4)}), () => "../pages/posts/*.md");
  const pageTitle = "My Astro Learning Blog";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div>
    <h1>My Astro Learning Blog</h1>
    <p>This is where I will post about my journey learning Astro.</p>

    <ul>
      ${allPosts.map(({ url, frontmatter }) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": url, "title": frontmatter.title })}`)}
    </ul>
  </div>
` })}`;
}, "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/blog.astro");

const $$file$2 = "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/blog.astro";
const $$url$2 = "/blog";

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Tag index";
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => Promise.resolve().then(() => post1),"../posts/post-2.md": () => Promise.resolve().then(() => post2),"../posts/post-3.md": () => Promise.resolve().then(() => post3),"../posts/post-4.md": () => Promise.resolve().then(() => post4)}), () => "../posts/*.md");
  const uniqueTags = [
    ...new Set(allPosts.map((post) => post.frontmatter.tags).flat())
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="tags">
    ${uniqueTags.map((tag) => renderTemplate`<p class="tag">
          <a${addAttribute(`/tags/${tag}`, "href")}>${tag}</a>
        </p>`)}
  </div>
` })}`;
}, "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/tags/index.astro");

const $$file$1 = "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const Astro = $$Astro;
const prerender = true;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => Promise.resolve().then(() => post1),"../posts/post-2.md": () => Promise.resolve().then(() => post2),"../posts/post-3.md": () => Promise.resolve().then(() => post3),"../posts/post-4.md": () => Promise.resolve().then(() => post4)}), () => "../posts/*.md");
  const uniqueTags = [
    ...new Set(allPosts.map((post) => post.frontmatter.tags).flat())
  ];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter(
      (post) => post.frontmatter.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag: pageTitle } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<p>Posts tagged with ${pageTitle}</p>
  <ul>
    ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)}
  </ul>
` })}`;
}, "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/tags/[tag].astro");

const $$file = "C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _tag_ as _, about as a, post1 as b, post2 as c, post3 as d, post4 as e, blog as f, index as g, index$1 as i, portfolio as p, rss_xml as r };
