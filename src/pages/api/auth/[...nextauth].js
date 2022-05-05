import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.GOOGLE_CLIENT_SECRET,
  callbacks: {
    async jwt({ token }) {
      const response = await fetch(
        `${process.env.TECH_STORE_USER_API_BASE_URL}/handle-login`,
        {
          method: 'POST',
          body: JSON.stringify({
            name: token.name,
            email: token.email,
            picture: token.picture,
          }),
        },
      );

      const data = await response.json();

      return {
        ...data,
        ...token,
      };
    },
    async session({ session, token }) {
      const { id, cpf, cellphone, addresses } = token;

      return {
        ...session,
        user: {
          ...session.user,
          id,
          cpf,
          cellphone,
          addresses,
        },
      };
    },
  },
});
