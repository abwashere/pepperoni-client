import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EmployeeRegistrationForm from "../forms/_EmployeeRegistrationForm";
import EmployeesListTable from "./_EmployeesListTable";
import { getAllUsers, deleteUser } from "./../../store/actions/userActions";
import { confirmDelete } from "./../../utils/confirmationPrompts";

const EmployeesList = () => {
	document.title = "Admin | personnel";

	const userState = useSelector((state) => state.userStore);
	const auth = useSelector((state) => state.authStore);
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

			if (!userState.errorMessage) setDeletedEmployee(userToDelete);
			setTimeout(() => {
				setDeletedEmployee(null);
			}, 6000);
		};

		confirmDelete(
			`${userToDelete.firstName} ${userToDelete.lastName} du staff`,
			callbackDelete
		);
	};

	return (
		<div className="EmployeesList AdminPage">
			<h2 className="sub-title">Liste du personnel</h2>

			{deletedEmployee && (
				<div className="info-box">
					Vous venez de supprimer {deletedEmployee.firstName}{" "}
					{deletedEmployee.lastName} du staff.
				</div>
			)}
			{userState.errorMessage && (
				<div className="form-error-msg">
					<i className="fas fa-exclamation-triangle"></i>{" "}
					{userState.errorMessage}
				</div>
			)}
			<div className="flex-row sp-btw align-start">
				<EmployeesListTable
					auth={auth}
					userState={userState}
					handleDelete={handleDelete}
				/>
				<EmployeeRegistrationForm />
			</div>
		</div>
	);
};

export default EmployeesList;
