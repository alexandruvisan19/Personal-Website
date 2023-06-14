import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { i as deserializeManifest } from './chunks/astro.dc1d60d1.mjs';
import 'preact';

const _page0  = () => import('./chunks/index@_@astro.547b6ae3.mjs');
const _page1  = () => import('./chunks/rss.e8d9e88b.mjs');
const _page2  = () => import('./chunks/about@_@astro.ce86aa95.mjs');
const _page3  = () => import('./chunks/post-1@_@md.f7b2520d.mjs');
const _page4  = () => import('./chunks/post-2@_@md.086f0f4a.mjs');
const _page5  = () => import('./chunks/post-3@_@md.81f889a7.mjs');
const _page6  = () => import('./chunks/post-4@_@md.6a3daa0e.mjs');
const _page7  = () => import('./chunks/blog@_@astro.143ffaa3.mjs');
const _page8  = () => import('./chunks/index@_@astro.4e4d7f80.mjs');
const _page9  = () => import('./chunks/_tag_@_@astro.2115b2a1.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/rss.xml.js", _page1],["src/pages/about.astro", _page2],["src/pages/posts/post-1.md", _page3],["src/pages/posts/post-2.md", _page4],["src/pages/posts/post-3.md", _page5],["src/pages/posts/post-4.md", _page6],["src/pages/blog.astro", _page7],["src/pages/tags/index.astro", _page8],["src/pages/tags/[tag].astro", _page9]]);const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"posts/post-1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-1","type":"page","pattern":"^\\/posts\\/post-1\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-1.md","pathname":"/posts/post-1","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"posts/post-2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-2","type":"page","pattern":"^\\/posts\\/post-2\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-2.md","pathname":"/posts/post-2","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"posts/post-3/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-3","type":"page","pattern":"^\\/posts\\/post-3\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-3.md","pathname":"/posts/post-3","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"posts/post-4/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/post-4","type":"page","pattern":"^\\/posts\\/post-4\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-4.md","pathname":"/posts/post-4","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/posts/post-1.md",{"propagation":"none","containsHead":true}],["C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/rss.xml.js",{"propagation":"none","containsHead":true}],["C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/tags/[tag].astro",{"propagation":"none","containsHead":true}],["C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/tags/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/posts/post-2.md",{"propagation":"none","containsHead":true}],["C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/posts/post-3.md",{"propagation":"none","containsHead":true}],["C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/posts/post-4.md",{"propagation":"none","containsHead":true}],["C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.547b6ae3.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss.e8d9e88b.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about@_@astro.ce86aa95.mjs","\u0000@astro-page:src/pages/posts/post-1@_@md":"chunks/post-1@_@md.f7b2520d.mjs","\u0000@astro-page:src/pages/posts/post-2@_@md":"chunks/post-2@_@md.086f0f4a.mjs","\u0000@astro-page:src/pages/posts/post-3@_@md":"chunks/post-3@_@md.81f889a7.mjs","\u0000@astro-page:src/pages/posts/post-4@_@md":"chunks/post-4@_@md.6a3daa0e.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog@_@astro.143ffaa3.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index@_@astro.4e4d7f80.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"chunks/_tag_@_@astro.2115b2a1.mjs","C:/Users/alex/Desktop/cod/AV-Website/Personal-website/src/components/TypeWritter":"_astro/TypeWritter.8870fdc2.js","/astro/hoisted.js?q=0":"_astro/hoisted.6401ea2b.js","@astrojs/preact/client.js":"_astro/client.34945a1a.js","C:/Users/alex/Desktop/cod/AV-Website/Personal-website/node_modules/.pnpm/@preact+signals@1.1.3_preact@10.15.1/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.f9a4abd7.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.d8c03bcf.css","/_astro/about.c9bd8603.css","/_astro/post-1.1ef100e8.css","/favicon.svg","/_astro/client.34945a1a.js","/_astro/hooks.module.ecbc82b6.js","/_astro/preact.module.dec703d8.js","/_astro/signals.module.f9a4abd7.js","/_astro/TypeWritter.8870fdc2.js","/index.html","/rss.xml","/about/index.html","/posts/post-1/index.html","/posts/post-2/index.html","/posts/post-3/index.html","/posts/post-4/index.html","/blog/index.html","/tags/index.html"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };