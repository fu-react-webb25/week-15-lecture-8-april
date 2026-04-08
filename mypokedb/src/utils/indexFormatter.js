export default function indexFormatter(id) {
	let index = "";

	if (id < 10) index = "#00" + id;
	else if (id < 100) index = "#0" + id;
	else index = "#" + id;

	return index;
}
