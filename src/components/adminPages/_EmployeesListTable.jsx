import React from "react";

const _EmployeesListTable = ({ auth, userState, handleDelete }) => {
	return (
		<table className="table of-employees">
			<thead>
				<tr>
					<th>Nom</th>
					<th>Prénom</th>
					<th>Pseudo</th>
					<th>Status</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{userState.users.map((employee) => (
					<tr key={employee._id} className="row">
						<td>{employee.lastName}</td>
						<td>{employee.firstName}</td>
						<td>{employee.pseudo}</td>
						<td>
							{employee.privileges === "admin"
								? "Manager/Chef(fe)"
								: "Serveur(euse)/Commis"}
						</td>
						<td>
							{auth.user._id !== employee._id && (
								<button
									type="submit"
									value={employee._id}
									onClick={handleDelete}
									className="mui-btn mui-btn delete"
								>
									x
								</button>
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default _EmployeesListTable;
