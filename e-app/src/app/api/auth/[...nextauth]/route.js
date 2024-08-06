import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../../libs/db";
import User from "../../models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const handler = NextAuth({
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "123@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          console.log("Missing email or password");
          return null;
        }

        try {
          await mongoose.connect(process.env.MONGO_URL);
          const user = await User.findOne({ email });

          if (!user) {
            console.log("No user found with this email");
            return null;
          }

          const isValidPassword = bcrypt.compareSync(password, user.password);

          if (!isValidPassword) {
            console.log("Invalid password");
            return null;
          }

          console.log("User authenticated successfully");
          return {
            id: user._id,
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };