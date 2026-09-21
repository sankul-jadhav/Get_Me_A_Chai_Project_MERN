import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import User from '@/models/User';
import connectDB from '@/db/connectDb';

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider == "github") {
        await connectDB();

        const currentUser = await User.findOne({
          email: user.email
        });
        if (!currentUser) {
          const newUser = new User({
            email: user.email,
            userName: user.email.split("@")[0],
          });

          await newUser.save();
        }
        return true;
      }
    },

    async session({ session }) {
      await connectDB();

      const dbUser = await User.findOne({
        email: session.user.email
      });
      if (dbUser) {
        session.user.name = dbUser.userName;
      }
      return session;
    }
  }
});

export { handler as GET, handler as POST };