import { d as defineAction, o as objectType, s as stringType, n as nullType } from './chunks/server_BHink8dX.mjs';
import './chunks/_astro_actions_Ta4kOcFo.mjs';
import { g as getCollection } from './chunks/_astro_content_COOCtnu1.mjs';

const categories = {
  getCategories: defineAction({
    input: nullType(),
    handler: async () => {
      const allArticles = await getCollection("articles");
      const categories2 = [
        ...new Set(allArticles.map((article) => article.data.category))
      ];
      return { success: true, categories: categories2 };
    }
  }),
  filterByCategory: defineAction({
    input: objectType({
      category: stringType()
    }),
    handler: async ({ category }) => {
      const articles = [];
      const allArticles = await getCollection("articles");
      if (category === "all") {
        articles.push(...allArticles);
        return { success: true, articles };
      }
      const filteredArticles = allArticles.filter((article) => article.data.category.toLowerCase() === category.toLowerCase());
      articles.push(...filteredArticles);
      return { success: true, articles };
    }
  })
};

const server = { categories };

export { server };
