import React from "react";
import ReservationForm from "./forms/_ReservationForm";

const Reservation = () => {
	return (
		<div className="Reservation">
			<h2 className="page-title">Réserver une table</h2>
			<div>
				<ReservationForm />
			</div>
			<p className="information-text">* obligatoire (mandatory)</p>
		</div>
	);
};

export default Reservation;
