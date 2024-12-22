import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	send: async ({ request }) => {
		console.log('⚡ Iniciando procesamiento del formulario...');
		const data = await request.formData();
		console.log('📝 FormData recibido:', Object.fromEntries(data.entries()));

		const userMessage = {
			nombre: data.get('nombre'),
			email: data.get('email'),
			mensaje: data.get('mensaje')
		};

		console.log('✉️ Mensaje estructurado:', userMessage);

		try {
			console.log('✅ Formulario procesado exitosamente');
			// Para éxito, retorna el objeto directamente
			return {
				success: true,
				message: 'Formulario recibido'
			};
		} catch (error) {
			console.error('❌ Error procesando el formulario:', error);
			// Para error, usa fail
			return fail(500, {
				success: false,
				message: 'Error al procesar el formulario'
			});
		}
	}
} satisfies Actions;
