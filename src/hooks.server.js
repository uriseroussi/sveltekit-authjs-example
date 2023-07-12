import { SvelteKitAuth } from '@auth/sveltekit';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import GoogleProvider from '@auth/core/providers/google';
import {
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	NODE_ENV,
	SMTP_HOST,
	SMTP_PORT,
	SMTP_USER,
	SMTP_PASSWORD,
	EMAIL_FROM
} from '$env/static/private';
import clientPromise from '$lib/database/clientPromise';
import EmailProvider from '@auth/core/providers/email';

export const handle = SvelteKitAuth({
	providers: [
		EmailProvider({
			server: {
				host: SMTP_HOST,
				port: Number(SMTP_PORT),
				auth: {
					user: SMTP_USER,
					pass: SMTP_PASSWORD
				}
			},
			from: EMAIL_FROM
		}),
		GoogleProvider({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET })
	],
	adapter: MongoDBAdapter(clientPromise, { databaseName: NODE_ENV }),
	pages: {
		signIn: '/login',
		signOut: '/logout'
	}
});
