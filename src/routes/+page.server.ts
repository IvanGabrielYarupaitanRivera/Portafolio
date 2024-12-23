import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	send: async ({ request }) => {
		const data = await request.formData();

		const userMessage = {
			nombre: data.get('nombre'),
			email: data.get('email'),
			mensaje: data.get('mensaje')
		};

		console.log('✉️ Mensaje estructurado:', userMessage);

		try {
			return {
				success: true,
				message: 'Formulario recibido'
			};
		} catch (error) {
			return fail(500, {
				success: false,
				message: 'Error al procesar el formulario' + error
			});
		}
	}
} satisfies Actions;
