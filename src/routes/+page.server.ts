import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import emailjs from '@emailjs/nodejs';

import {
	PRIVATE_EMAIL_SERVICE_ID,
	PRIVATE_EMAIL_TEMPLATE_ID,
	PRIVATE_EMAILJS_KEY
} from '$env/static/private';

import { PUBLIC_EMAILJS_KEY } from '$env/static/public';

export const actions = {
	send: async ({ request }) => {
		const data = await request.formData();

		const templateParams = {
			user_name: data.get('user_name'),
			user_email: data.get('user_email'),
			message: data.get('message')
		};

		try {
			await emailjs.send(PRIVATE_EMAIL_SERVICE_ID, PRIVATE_EMAIL_TEMPLATE_ID, templateParams, {
				publicKey: PUBLIC_EMAILJS_KEY,
				privateKey: PRIVATE_EMAILJS_KEY
			});

			return {
				success: true,
				message: 'Formulario recibido'
			};
		} catch (error) {
			console.log(error);

			return fail(500, {
				success: false,
				message: 'Error al procesar el formulario' + error
			});
		}
	}
} satisfies Actions;
