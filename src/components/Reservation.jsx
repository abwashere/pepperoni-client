import React from "react";
import ReservationForm from "./forms/_ReservationForm";

const Reservation = () => {
	return (
		<div className="Reservation">
			<h2 className="sub-title">Réserver une table</h2>

			<ReservationForm />

			<p className="information-text">* obligatoire (mandatory)</p>
		</div>
	);
};

export default Reservation;
