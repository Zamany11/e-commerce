import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Types for the environment variables
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
const BETTER_AUTH_SECRET = process.env.BETTER_AUTH_SECRET as string;

// Check if required environment variables are present
if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !BETTER_AUTH_SECRET) {
  throw new Error("Missing required environment variables for authentication");
}

export const auth = betterAuth({
    secret: BETTER_AUTH_SECRET,
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            enabled: true,
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        }
    }
});

