import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DIDd5bfF.mjs';
import clsx from 'clsx';
import { a as actions } from '../chunks/_astro_actions_Ta4kOcFo.mjs';
import { $ as $$H1 } from '../chunks/h1_BOMPrAed.mjs';
import { f as formatDate } from '../chunks/utils_3d8shty0.mjs';
import { $ as $$InfoLayout } from '../chunks/InfoLayout_wQN0KXXE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const categoriesResult = await Astro2.callAction(actions.categories.getCategories, null);
  const categories = categoriesResult?.data?.categories || [];
  const selectedCategory = Astro2.url.searchParams.get("category") || "all";
  const articlesResult = await Astro2.callAction(actions.categories.filterByCategory, {
    category: selectedCategory
  });
  if (articlesResult?.error) {
    console.log("error", articlesResult.error);
  }
  const articles = articlesResult?.data?.articles || [];
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-0 p-4 sm:pt-8 sm:px-12 pb-20 min-h-screen"> ${renderComponent($$result2, "H1", $$H1, {}, { "default": async ($$result3) => renderTemplate` Blog ` })} <ul class="mt-8 sm:mt-12 flex items-center gap-4"> <li> <a href="/blog"${addAttribute(clsx(
    "w-fit px-4 py-1 text-sm bg-transparent rounded-full transition-all duration-300 ease-in-out",
    selectedCategory === "all" ? "text-white bg-zinc-100/20 outline-2 outline-offset-2 outline-zinc-100/20" : "text-zinc-400 hover:text-zinc-300"
  ), "class")}>
All
</a> </li> ${categories.map((category) => renderTemplate`<li> <a${addAttribute(`/blog?category=${category.toLowerCase()}`, "href")}${addAttribute(clsx(
    "w-fit px-4 py-1 text-sm bg-transparent rounded-full transition-all duration-300 ease-in-out",
    selectedCategory === category.toLowerCase() ? "text-white bg-zinc-100/20 outline-2 outline-offset-2 outline-zinc-100/20" : "text-zinc-400 hover:text-zinc-200"
  ), "class")}> ${category} </a> </li>`)} </ul> <ul class="mt-4 space-y-4 sm:space-y-8"> ${articles.map((article) => renderTemplate`<li> <a class="space-y-1 group"${addAttribute(`/blog/${article.data.slug}`, "href")}> <h2 class="text-2xl xl:text-2xl text-zinc-300 group-hover:text-white text-balance font-medium underline group-hover:underline-offset-2 decoration-transparent group-hover:decoration-zinc-500"> ${article.data.title} </h2> <p class="text-lg text-zinc-400"> ${article.data.snippet} </p> <p class="text-sm text-zinc-400"> ${formatDate(article.data.pubDate)} &middot;${" "} ${article.data.author} </p> </a> </li>`)} </ul> </div> ` })}`;
}, "/Users/ianmathaiya/Documents/codebase/nikola-tesla/src/pages/blog/index.astro", void 0);

const $$file = "/Users/ianmathaiya/Documents/codebase/nikola-tesla/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
