import { useStore } from "@nanostores/preact";
import { $header } from "../store/headerStore";

export default function Navigation() {
  const { isHamburgerOpen, isMobile } = useStore($header);

  return isHamburgerOpen || !isMobile ? (
    <div id="nav-links" class="w-full top-20 left-12 m-0 [&>a]:pr-4">
      <a href="/">Home</a>
      <a href="/about/">About</a>
      <a href="/blog/">Blog</a>
      <a href="/tags/">Tags</a>
    </div>
  ) : null;
}
