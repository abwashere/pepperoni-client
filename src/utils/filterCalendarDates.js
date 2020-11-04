export const isWeekday = (date) => {
	const day = new Date(date).getDay();
	return day !== 0 && day !== 6;
};

export const appDates = (date, unavailableDate1, unavailableDate2) => {
	const day = new Date(date).getDay();
	return day !== unavailableDate1 && day !== unavailableDate2;
};
//unavailableDay = index of day starting on Sunday
//Sunday -> Saturday : 0 -> 6
