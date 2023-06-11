import { useStore } from "@nanostores/preact";
import { isCartOpen } from "../store/headerStore";

export default function Navigation() {
  const $isCartOpen = useStore(isCartOpen);

  return $isCartOpen ? (
    <div id="nav-links" class="w-full top-20 left-12 m-0 bg-blue-200">
      <a href="/">Home</a>
      <a href="/about/">About</a>
      <a href="/blog/">Blog</a>
      <a href="/tags/">Tags</a>
    </div>
  ) : null;
}
