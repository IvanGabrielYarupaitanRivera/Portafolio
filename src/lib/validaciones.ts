//Función par validar el user_name
function validarUserName(user_name: string) {
	const nombreLimpio = user_name.trim();

	if (!nombreLimpio) {
		throw new Error('El nombre del usuario es obligatorio');
	}

	if (nombreLimpio.length < 2) {
		throw new Error('El nombre debe tener al menos 2 caracteres');
	}

	if (nombreLimpio.length > 40) {
		throw new Error('El nombre no puede exceder los 40 caracteres');
	}
}

function validarUserEmail(user_email: string) {
	const emailLimpio = user_email.trim();

	if (!emailLimpio) {
		throw new Error('El email del usuario es obligatorio');
	}

	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpio)) {
		throw new Error('El email no es válido');
	}

	if (emailLimpio.length > 100) {
		throw new Error('El email no puede exceder los 100 caracteres');
	}
}

function validarMensaje(message: string) {
	const mensajeLimpio = message.trim();

	if (!mensajeLimpio) {
		throw new Error('El mensaje es obligatorio');
	}

	if (mensajeLimpio.length < 10) {
		throw new Error('El mensaje debe tener al menos 10 caracteres');
	}

	if (mensajeLimpio.length > 500) {
		throw new Error('El mensaje no puede exceder los 500 caracteres');
	}

	if (mensajeLimpio.includes('<') || mensajeLimpio.includes('>')) {
		throw new Error('El mensaje no puede contener los caracteres < o >');
	}
}

export function validarFormulario(user_name: string, user_email: string, message: string) {
	validarUserName(user_name);
	validarUserEmail(user_email);
	validarMensaje(message);
}
