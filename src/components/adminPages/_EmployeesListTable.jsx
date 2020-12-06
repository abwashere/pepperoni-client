import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, deleteUser } from "./../../store/actions/userActions";
import { confirmDelete } from "./../../utils/confirmationPrompts";

const _EmployeesListTable = () => {
	const userState = useSelector((state) => state.userStore);
	const authState = useSelector((state) => state.authStore);
	const [deletedEmployee, setDeletedEmployee] = useState(null);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);

	const handleDelete = (e) => {
		const employeeId = e.target.value;
		const userToDelete = userState.users.find(
			(employee) => employee._id === employeeId
		);

		let callbackDelete = async () => {
			await dispatch(deleteUser(employeeId));
			await dispatch(getAllUsers());

			if (!userState.errorMessage) setDeletedEmployee(userToDelete);
			setTimeout(() => {
				setDeletedEmployee(null);
			}, 3000);
		};

		confirmDelete(
			`${userToDelete.firstName} ${userToDelete.lastName} du staff`,
			callbackDelete
		);
	};

	return (
		<>
			{deletedEmployee && (
				<div className="info-box">
					Vous venez de supprimer {deletedEmployee.firstName}{" "}
					{deletedEmployee.lastName} du staff.
				</div>
			)}

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
								{authState.user._id !== employee._id && (
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
		</>
	);
};

export default _EmployeesListTable;
