import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    role: v.union(v.literal("candidate"), v.literal("interviewer")), //'candidate' | 'interviewer' | 'recruiter'
    clearkId: v.string(),
  }).index("by_clerkId", ["clearkId"]),
});
