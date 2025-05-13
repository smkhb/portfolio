import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate, e as renderComponent } from './astro/server_DIDd5bfF.mjs';
import { $ as $$RootLayout, W as WarpBackground } from './warp-background_BYluQHaz.mjs';
import clsx$1 from 'clsx';
import clsx from 'clsx/lite';

const $$Astro$2 = createAstro();
const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  const { href, openNewTab = true } = Astro2.props;
  const pathname = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(openNewTab ? "_blank" : "_self", "target")}${addAttribute(clsx(
    "w-fit group flex items-center gap-1 text-base hover:text-zinc-100 cursor-pointer",
    pathname === href ? "text-zinc-100" : "text-zinc-500"
  ), "class")}> ${renderSlot($$result, $$slots["default"])} ${openNewTab && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="-rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"> <title>Arrow Icon</title> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"></path> </svg>`} </a>`;
}, "/Users/ianmathaiya/Documents/codebase/nikola-tesla/src/components/external-link.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const pathname = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<footer class="py-4 px-4 sm:px-12 w-full fixed bottom-0 flex items-center gap-4 sm:gap-8 bg-zinc-900"> <div class="flex gap-1"> ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": "/", "openNewTab": false }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="w-6 h-6 text-zinc-500 group-hover:text-zinc-100"> <title>Home</title> <path fill="currentColor" fill-rule="evenodd" d="M2.335 7.875c-.54 1.127-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093S7.447 22 10.894 22h2.212c3.447 0 5.17 0 6.345-1.012s1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083s-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></path> </svg> ` })} <p class="text-zinc-600">/</p> ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": "/projects", "openNewTab": false }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"${addAttribute(clsx$1("w-6 h-6", pathname === "/projects" ? "text-zinc-100" : "text-zinc-500 group-hover:text-zinc-100"), "class")}> <title>Projects</title> <path fill="currentColor" fill-rule="evenodd" d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.892c-.447-3.049-.67-4.573.278-5.56s2.636-.987 6.01-.987M8 18c0-.414.373-.75.833-.75h6.334c.46 0 .833.336.833.75s-.373.75-.833.75H8.833c-.46 0-.833-.336-.833-.75" clip-rule="evenodd"></path> <path fill="currentColor" d="M8.51 2h6.98c.233 0 .41 0 .567.015c1.108.109 2.014.775 2.399 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.099 2 8.278 2 8.51 2" opacity=".4"></path><path fill="currentColor" d="M6.31 4.723c-1.39 0-2.53.84-2.91 1.953l-.024.07a8 8 0 0 1 1.232-.253c1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.952 0 4.032.138c.42.054.834.133 1.232.253l-.023-.07c-.38-1.114-1.52-1.953-2.911-1.953z" opacity=".7"></path> </svg> ` })} </div> ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": "/blog", "openNewTab": false }, { "default": ($$result2) => renderTemplate`Blog` })} ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": "/about", "openNewTab": false }, { "default": ($$result2) => renderTemplate`About` })} ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": "/contact", "openNewTab": false }, { "default": ($$result2) => renderTemplate`Contact` })} </footer>`;
}, "/Users/ianmathaiya/Documents/codebase/nikola-tesla/src/components/footer.astro", void 0);

const $$Astro = createAstro();
const $$InfoLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfoLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex relative gap-4 w-full max-w-screen-xl"> <nav class="relative w-4 md:min-w-2xs xl:min-w-sm sm:min-h-screen sm:ml-4 sm:pb-4"> <div class="w-full h-full max-sm:w-4 md:max-w-2xs xl:max-w-sm fixed -z-10 sm:bottom-4 sm:rounded-b-full overflow-hidden"> ${renderComponent($$result2, "WarpBackground", WarpBackground, { "color1": "#ffffff", "color2": "#27272a", "color3": "#52525b", "speed": 0.15, "swirl": 1.5, "swirlIterations": 10, "shapeScale": 0.3, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ianmathaiya/Documents/codebase/nikola-tesla/src/components/warp-background", "client:component-export": "default" })} </div> </nav> <main class="relative"> ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> </div> ` })}`;
}, "/Users/ianmathaiya/Documents/codebase/nikola-tesla/src/layouts/InfoLayout.astro", void 0);

export { $$InfoLayout as $, $$ExternalLink as a };
