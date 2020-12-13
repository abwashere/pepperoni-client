const amHours = ["11h30", "12h00", "12h30", "13h00", "13h30"];
const pmHours = ["19h30", "20h00", "20h30", "21h00", "21h30", "22h00"];
const dayHours = [...amHours, ...pmHours];

const openingHours = [
	{ day: 0, hours: amHours }, // Sunday
	{ day: 1, hours: "fermé" }, // Monday
	{ day: 2, hours: "fermé" }, // ...
	{ day: 3, hours: pmHours },
	{ day: 4, hours: dayHours },
	{ day: 5, hours: dayHours },
	{ day: 6, hours: dayHours }, // Saturday
];

export { openingHours };
