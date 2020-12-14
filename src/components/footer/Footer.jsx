import React from "react";
import Contact from "./_Contact";
import Location from "./_Location";
import Timetable from "./_Timetable";

const Footer = () => {
	return (
		<footer className="Footer flex-row sp-btw align-start">
			<Contact />
			<Location />
			<Timetable />
		</footer>
	);
};

export default Footer;
