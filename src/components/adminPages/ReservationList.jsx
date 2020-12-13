import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	getAllReservations,
	cancelReservation,
	clearMessages,
} from "./../../store/actions/reservationActions";

const ReservationList = () => {
	document.title = "Admin | réservations";

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllReservations());
	}, [dispatch]);

	const reservations = useSelector(
		(state) => state.reservationStore.reservations
	);
	const successMessage = useSelector(
		(state) => state.reservationStore.successMessage
	);

	const handleDelete = async (slot, table) => {
		await dispatch(cancelReservation(slot._id, table._id));
		await dispatch(getAllReservations());
		setTimeout(() => {
			dispatch(clearMessages());
		}, 5000);
	};

	const beforeDelete = (slot, table) => {
		let checkDelete = prompt(
			`Etes-vous sûr(e) de vouloir supprimer cette réservation ? => ${slot.date
				.toLocaleString("fr-FR")
				.slice(0, 10)} à ${slot.time}, au nom de ${
				table.reservation[0].clientName
			}. Si oui, entrez 'o'.`,
			"non"
		);
		checkDelete !== null && checkDelete.toLowerCase() === "o"
			? handleDelete(slot, table)
			: console.log("Abort delete");
	};

	return (
		<div className="ReservationList AdminPage">
			<h2 className="sub-title">Gérer les réservations</h2>

			<table className="table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Heure</th>
						<th>Table</th>
						<th>Couverts</th>
						<th>Nom</th>
						<th>Téléphone</th>
						<th>Email</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{reservations?.map((slot) =>
						slot.tables.map((table) => (
							<tr key={table._id} className="reservation row">
								<td>{slot.date.toLocaleString("fr-FR").slice(0, 10)}</td>
								<td>{slot.time}</td>
								<td>{table.tableName}</td>
								<td>{table.capacity}</td>
								{/* TODO: mettre le nombre réels de places réservées => changer le tableModel */}
								<td>{table.reservation[0].clientName}</td>
								<td>{table.reservation[0].clientPhone}</td>
								<td>{table.reservation[0].clientEmail}</td>
								<td>
									<button
										type="submit"
										onClick={() => beforeDelete(slot, table)}
										className="mui-btn mui-btn delete"
									>
										<i className="fas fa-trash-alt fa-sm"></i>
									</button>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>

			{/* Success Message */}
			{successMessage && <div className="info-box">{successMessage}</div>}
		</div>
	);
};

export default ReservationList;
