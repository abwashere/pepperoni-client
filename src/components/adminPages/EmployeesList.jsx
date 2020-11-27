import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllUsers } from "./../../store/actions/userActions";

const EmployeesList = () => {
	const staff = useSelector((state) => state.userStore.users);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);

	return (
		<div className="EmployeesList AdminPage">
			<h2 className="sub-title">Liste du personnel</h2>
			<ul>
				{staff.map((user) => (
					<li key={user._id}>
						{user.firstName} {user.lastName} ({user.privileges})
					</li>
				))}
			</ul>
		</div>
	);
};

export default EmployeesList;
