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
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
    }),

    {
        id: "facebook_business",
        name: "Facebook for Business",
        type: "oauth",
        debug: true,
        authorization: {
            url: "https://www.facebook.com/dialog/oauth",
            params: {
                scope:
                    "ads_management ads_read business_management email leads_retrieval pages_manage_cta page_events pages_manage_ads pages_show_list pages_manage_engagement pages_read_user_content pages_manage_instant_articles pages_manage_metadata pages_manage_posts pages_read_engagement pages_messaging publish_video read_insights read_page_mailboxes public_profile read_insights",
            },
        },
        token: {
            url: "https://graph.facebook.com/oauth/access_token",
        },
        userinfo: {
            url: "https://graph.facebook.com/me",
            params: { fields: "id,name,email,picture" },
            async request({ tokens, client, provider }) {
                return await client.userinfo(tokens.access_token!, {
                    params: provider.userinfo?.params,
                });
            },
        },
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        profile(profile) {
            return {
                id: profile.id,
                name: profile.name,
                email: profile.email,
                image: profile.picture.data.url,
            };
        },
    },
    AppleProvider({
        clientId: process.env.APPLE_ID ?? "",
        clientSecret: process.env.APPLE_SECRET ?? ""
    })
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken;
            return session;
        }
    }
};


