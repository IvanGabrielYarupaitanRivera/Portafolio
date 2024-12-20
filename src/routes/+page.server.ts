export const actions = {
	send: async ({ request }) => {
		const data = await request.formData();

		const userMessage = {
			nombre: data.get('nombre'),
			email: data.get('email'),
			mensaje: data.get('mensaje')
		};

		console.log(
			'Nombre:',
			userMessage.nombre + '\nEmail:',
			userMessage.email + '\nMensaje:',
			userMessage.mensaje
		);
	}
};
