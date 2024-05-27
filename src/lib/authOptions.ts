import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";




export const authOptions = {
    providers: [GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    }),
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ""
    }),
    AppleProvider({
        clientId: process.env.APPLE_ID ?? "",
        clientSecret: process.env.APPLE_SECRET ?? ""
    })
    ]
};


