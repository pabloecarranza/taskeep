export function fecha() {
	const meses = [
		'enero',
		'febrero',
		'marzo',
		'abril',
		'mayo',
		'junio',
		'julio',
		'agosto',
		'septiembre',
		'octubre',
		'noviembre',
		'diciembre',
	];

	const dias_semana = [
		'Domingo',
		'Lunes',
		'martes',
		'Miércoles',
		'Jueves',
		'Viernes',
		'Sábado',
	];

	const fecha = new Date();

	let date =
		dias_semana[fecha.getDay()] +
		', ' +
		fecha.getDate() +
		' de ' +
		meses[fecha.getMonth()] +
		' de ' +
		fecha.getUTCFullYear();

	return date;
}

export function validate(input) {
	let errors = {};
	const regexName = /^([a-zA-Z ]+)$/i;
	input.name
		? (errors.name = '')
		: (errors.name = 'El nombre no puede estar vacio');
	if (input.name && !regexName.test(input.name)) {
		errors.name = 'El nombre no puede incluir caracteres especiales o numeros';
	}

	return errors;
}

export function diaDeSemana() {
	const dias_semana = [
		'Domingo',
		'Lunes',
		'martes',
		'Miércoles',
		'Jueves',
		'Viernes',
		'Sábado',
	];

	const fecha = new Date();

	let date = dias_semana[fecha.getDay()];

	return date;
}

export function MesyDia() {
	const meses = [
		'enero',
		'febrero',
		'marzo',
		'abril',
		'mayo',
		'junio',
		'julio',
		'agosto',
		'septiembre',
		'octubre',
		'noviembre',
		'diciembre',
	];

	const fecha = new Date();

	let date = fecha.getDate() + ' de ' + meses[fecha.getMonth()];
	return date;
}
