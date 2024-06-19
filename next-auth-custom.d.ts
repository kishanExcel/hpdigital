// custom.d.ts
import { Session } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            name?: string | null | undefined;
            email?: string | null | undefined;
            image?: string | null | undefined;
            profile: {
                accounts: {

                    data: Array<{
                        id: string;
                        access_token?: string,
                        name: string;
                        category: string;

                    }>;
                };
            };
        };
    }
}