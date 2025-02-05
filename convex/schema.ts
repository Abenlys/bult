import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  freelancers: defineTable({
    userId: v.string(), // Lier le freelance à un utilisateur Clerk
    name: v.string(),
    email: v.string(),
    description: v.optional(v.string()),
    skills: v.array(v.string()),
    createdAt: v.number(),
  }),
  bookings: defineTable({
    freelancerId: v.id("freelancers"),
    clientId: v.string(),
    date: v.string(),
    status: v.union(v.literal("pending"), v.literal("confirmed"), v.literal("canceled")),
  }),
});