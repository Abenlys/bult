import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Ajouter un freelance
export const createfreelancer = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    email: v.string(),
    description: v.optional(v.string()),
    skills: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("freelancers", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

// Récupérer un freelancer par ID
export const getFreelancer = query({
  args: { id: v.id("freelancers") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Lister tous les freelances
export const listFreelancers = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("freelancers").collect()
    },
});
