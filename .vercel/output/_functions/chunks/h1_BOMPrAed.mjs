import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate } from './astro/server_DIDd5bfF.mjs';
import 'clsx';
import clsx from 'clsx/lite';

const $$Astro = createAstro();
const $$H1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$H1;
  const { size = "default", className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(clsx(
    "text-white font-bold text-balance",
    size === "default" && "text-4xl md:text-6xl xl:text-8xl tracking-tight leading-20 md:leading-14 lg:leading-20",
    size === "large" && "text-8xl md:text-[120px] lg:text-[160px] tracking-tighter leading-20 sm:leading-36",
    className
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/Users/ianmathaiya/Documents/codebase/nikola-tesla/src/components/h1.astro", void 0);

export { $$H1 as $ };
