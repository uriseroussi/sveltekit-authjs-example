import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const session = await event.locals.auth();

	if (!session) {
		redirect(307, 'auth/signin');
	}

	return {
		session
	};
};
