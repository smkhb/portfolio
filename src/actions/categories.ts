import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const categories = {
    filterByCategory: defineAction({
        accept: 'form',
        input: z.object({
            category: z.string(),
        }),
        handler: async ({ category }) => {
            console.log(category);

            return {success: true, category}
        }
    })
};