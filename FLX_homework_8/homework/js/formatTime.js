function formatTime (value) {
	let days = Math.floor((value / (24 * 60)));
	let hours = Math.floor((value % (24 * 60)) / 60);
	let minutes = Math.floor((value % (24 * 60)) % 60);

	return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
}
console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));