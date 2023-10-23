import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import runQuery from "../../../../../db/runQurey";
import{getUserData} from "../../../../../db/query"
const authOptions: NextAuthOptions = {
   session: {
      strategy: "jwt",
   },
   providers: [
      CredentialsProvider({
         type: "credentials",
         credentials: {}, // all the credentials send are accepeted here
         async authorize(credentials, req): Promise <any> {
            //fn which fire when we request to an backend api
            const { username, password, userType } = credentials as { username: string; password: string; userType:string };
            console.log(JSON.stringify({username, userType}))
            const result = (await runQuery(getUserData(), [username, userType]))[0]
            if (result.username !== username || result.password !== password) throw new Error("Invalid username or password");
            return { id: result.id, username, userType };
         },
      }),
   ],
   secret:process.env.NEXTAUTH_SECRET,
   pages: {
      signIn: "/",
   },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
