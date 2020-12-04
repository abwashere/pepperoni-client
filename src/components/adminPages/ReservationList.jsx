import React from "react";

const fakeReservations = [
	{
		date: "2020-11-05",
		time: "20h00",
		tableName: "table-1",
		people: 7,
		clientName: "John Doe",
		clientPhone: "0123456789",
	},
	{
		date: "2020-11-15",
		time: "20h00",
		tableName: "table-2",
		people: 4,
		clientName: "Jennifer Doe",
		clientPhone: "0123456789",
	},
	{
		date: "2020-11-04",
		time: "21h00",
		tableName: "table-1",
		people: 2,
		clientName: "Audrey Peppe",
		clientPhone: "0123456789",
		clientEmail: "audrey@pepperoni.com",
	},
];

const handleDelete = (booking) => {
	console.log(`You deleted reservation of ${booking}`);
};

const beforeDelete = (booking) => {
	let checkDelete = prompt(
		"Etes-vous sûr(e) de vouloir supprimer cette réservation ? Si oui, entrez 'o'.",
		"non"
	);
	checkDelete !== null && checkDelete.toLowerCase() === "o"
		? console.log(`You deleted reservation of ${booking}`) //handleDelete()
		: console.log("Abort delete");
};

const ReservationList = () => {
	document.title = "Admin | réservations";

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
					{fakeReservations.map((reservation, ind) => (
						<tr key={ind} className="reservation row">
							<td>{reservation.date}</td>
							<td>{reservation.time}</td>
							<td>{reservation.tableName}</td>
							<td>{reservation.people}</td>
							<td>{reservation.clientName}</td>
							<td>{reservation.clientPhone}</td>
							<td>{reservation.clientEmail}</td>
							<td>
								<button
									type="submit"
									onClick={() => beforeDelete(reservation.clientName)}
									className="mui-btn mui-btn delete"
								>
									<i className="fas fa-trash-alt fa-sm"></i>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ReservationList;
