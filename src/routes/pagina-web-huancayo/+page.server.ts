import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import emailjs from '@emailjs/nodejs';
import { validarFormulario } from '$lib/validaciones';

import {
	PRIVATE_EMAIL_SERVICE_ID,
	PRIVATE_EMAIL_TEMPLATE_ID,
	PRIVATE_EMAILJS_KEY
} from '$env/static/private';

import { PUBLIC_EMAILJS_KEY } from '$env/static/public';

export const actions = {
	send: async ({ request }) => {
		const data = await request.formData();
		const user_name = data.get('user_name') as string;
		const user_email = data.get('user_email') as string;
		const message = data.get('message') as string;

		try {
			validarFormulario(user_name, user_email, message);

			const templateParams = {
				user_name: user_name,
				user_email: user_email,
				message: message
			};

			await emailjs.send(PRIVATE_EMAIL_SERVICE_ID, PRIVATE_EMAIL_TEMPLATE_ID, templateParams, {
				publicKey: PUBLIC_EMAILJS_KEY,
				privateKey: PRIVATE_EMAILJS_KEY
			});

			return {
				success: true,
				message: 'Formulario recibido'
			};
		} catch (error) {
			return fail(500, {
				success: false,
				message: error instanceof Error ? error.message : 'Error desconocido'
			});
		}
	}
} satisfies Actions;
