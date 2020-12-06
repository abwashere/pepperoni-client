import React from "react";
import EmployeeRegistrationForm from "../forms/_EmployeeRegistrationForm";
import EmployeesListTable from "./_EmployeesListTable";

const EmployeesList = () => {
	document.title = "Admin | personnel";

	return (
		<div className="EmployeesList AdminPage">
			<h2 className="sub-title">Liste du personnel</h2>

			<div className="flex-row sp-btw align-start">
				<EmployeesListTable />
				<EmployeeRegistrationForm />
			</div>
		</div>
	);
};

export default EmployeesList;
