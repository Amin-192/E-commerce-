import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import * as mongoose from 'mongoose';
import User from '../../models/User'
import bcrypt from 'bcrypt'
import GoogleProvider from "next-auth/providers/google"
import { MongoClient } from "mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

import client from "../../../../libs/db"

const handler = NextAuth({
  secret:process.env.SECRET,
  adapter: MongoDBAdapter(client),
  providers:[ 
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

    }),
    
    
    CredentialsProvider({
    
    name: 'Credentials',
    id: 'credentials',
    credentials: {
      username: { label: "email", type: "email", placeholder: "123@gmail.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      
     const email = credentials?.email;
     const password = credentials?.password;
      
     mongoose.connect(process.env.MONGO_URL);
     const user = await User.findOne({email})
     const passwordOK = user && bcrypt.compareSync(password, user.password)
     
     console.log({password})
     if(passwordOK){
      return user;
     }

      // Return null if user data could not be retrieved
      return null
    }
  })],
})

export { handler as GET, handler as POST }