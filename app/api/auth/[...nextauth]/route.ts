import NextAuth, { Account, NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";


//Initiate the authOptions
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
    newUser: '/signup',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ],
  callbacks: {
    async jwt({ token }: { token: JWT; account: Account | null }) {
      return token;
    },
    async session({ session }: { session: Session; token: JWT }) {
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
};

//Auth handler
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

