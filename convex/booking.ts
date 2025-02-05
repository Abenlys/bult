import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Créer une réservation
export const createBooking = mutation({
  args: {
    freelancerId: v.id("freelancers"),
    clientId: v.string(),
    date: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("bookings", {
      ...args,
      status: "pending",
    });
  },
});

// Récupérer les réservations d’un freelance
export const getBookingsForFreelancer = query({
    args: { freelancerId: v.id("freelancers") },
    handler: async (ctx, args) => {
      return await ctx.db
        .query("bookings")
        .filter((q) => q.eq(q.field("freelancerId"), args.freelancerId))
        .collect();
    },
  });