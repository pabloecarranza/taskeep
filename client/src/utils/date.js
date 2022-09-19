export function fecha() {
	const meses = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'Octuber',
		'November',
		'December',
	];

	const dias_semana = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
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
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const fecha = new Date();

	let date = dias_semana[fecha.getDay()];

	return date;
}

export function MesyDia() {
	const meses = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'Octuber',
		'November',
		'December',
	];

	const fecha = new Date();

	let date = fecha.getDate() + ' de ' + meses[fecha.getMonth()];
	return date;
}
