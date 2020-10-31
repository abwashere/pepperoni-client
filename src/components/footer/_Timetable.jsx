import React from "react";

const _Timetable = () => {
	return (
		<div className="Timetable">
			<p>HORAIRES</p>
			<div className="table">
				<table>
					<tbody>
						<tr>
							<th>Lundi</th>
							<td>Fermé</td>
						</tr>
						<tr>
							<th>Mardi</th>
							<td>Fermé</td>
						</tr>
						<tr>
							<th>Mercredi</th>
							<td>12h - 14h30</td>
							<td>19h - 23h</td>
						</tr>
						<tr>
							<th>Jeudi</th>
							<td>12h - 14h30</td>
							<td>19h - 23h</td>
						</tr>
						<tr>
							<th>Vendredi</th>
							<td>12h - 14h30</td>
							<td>19h - 23h</td>
						</tr>
						<tr>
							<th>Samedi</th>
							<td>12h - 14h30</td>
							<td>19h - 23h</td>
						</tr>
						<tr>
							<th>Dimanche</th>
							<td>Fermé le matin</td>
							<td>19h - 22h</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default _Timetable;
