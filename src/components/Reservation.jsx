import React from "react";
import ReservationForm from "./forms/_ReservationForm";

const Reservation = () => {
	return (
		<div className="Reservation">
			<h2 className="sub-title">Réserver une table</h2>
			<ReservationForm />
		</div>
	);
};

export default Reservation;
