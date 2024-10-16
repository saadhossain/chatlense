import 'next-auth';

declare module 'next-auth' {
    interface User {
        accessToken?: string;
    }
    interface Session {
        accessToken?: string | any;
    } DefaultSession['user']
}