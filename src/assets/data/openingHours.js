const amHours = ["12h00", "12h30", "13h00", "13h30", "14h00"];
const pmHours = ["19h00", "19h30", "20h00", "20h30", "21h00", "21h30", "22h00"];
const dayHours = [...amHours, ...pmHours];

const openingHours = [
	{ day: 0, hours: amHours }, // Sunday
	{ day: 1, hours: [] }, // Monday
	{ day: 2, hours: pmHours }, // ...
	{ day: 3, hours: dayHours },
	{ day: 4, hours: dayHours },
	{ day: 5, hours: dayHours },
	{ day: 6, hours: dayHours }, // Saturday
];

export { openingHours };
