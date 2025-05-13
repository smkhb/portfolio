import { c as createComponent, a as createAstro, b as addAttribute, f as renderScript, d as renderTemplate, e as renderComponent, g as renderHead, r as renderSlot } from './astro/server_DIDd5bfF.mjs';
/* empty css                         */
import { $ as $$Font } from './_astro_assets_Y6DhjGcT.mjs';
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import { Warp } from '@paper-design/shaders-react';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/ianmathaiya/Documents/codebase/nikola-tesla/node_modules/.pnpm/astro@5.7.5_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/ianmathaiya/Documents/codebase/nikola-tesla/node_modules/.pnpm/astro@5.7.5_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$RootLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RootLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-mdysn4oi> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title ?? "Nikola Tesla"}</title>${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-geist", "preload": true, "data-astro-cid-mdysn4oi": true })}${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-mdysn4oi": true })}${renderHead()}</head> <body class="font-sans min-h-screen bg-zinc-900" data-astro-cid-mdysn4oi> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/ianmathaiya/Documents/codebase/nikola-tesla/src/layouts/RootLayout.astro", void 0);

function WarpBackground(props) {
  const defaultProps = {
    speed: 0.4,
    rotation: 0.5,
    style: { width: "100%", height: "100%" }
  };
  return /* @__PURE__ */ jsx(Warp, { ...defaultProps, ...props, style: { ...defaultProps.style, ...props.style } });
}

export { $$RootLayout as $, WarpBackground as W };
