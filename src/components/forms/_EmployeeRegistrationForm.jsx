import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, clearMessages } from "./../../store/actions/authActions";
import { getAllUsers } from "./../../store/actions/userActions";

const _EmployeeRegistrationForm = () => {
	const auth = useSelector((state) => state.authStore);
	const dispatch = useDispatch();

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const newUser = {
			lastName: evt.target.elements[0].value,
			firstName: evt.target.elements[1].value,
			email: evt.target.elements[2].value,
			password: evt.target.elements[3].value,
			privileges: evt.target.elements[4].value,
		};

		await dispatch(registerUser(newUser));
		await dispatch(getAllUsers());

		setTimeout(() => {
			dispatch(clearMessages());
		}, 5000);
	};

	const errorMessageFor = (field) => {
		if (auth.invalidCredentials?.[field])
			return (
				<div className="form-error-msg">
					<i className="fas fa-exclamation-triangle"></i>
					{"   "}
					{auth.invalidCredentials[field]}
				</div>
			);
	};

	return (
		<div className="EmployeeRegistrationForm form-container">
			<h3>Enregistrer un(e) nouvel(le) employé(e)</h3>
			<form className="mui-form" onSubmit={handleSubmit}>
				{/* --  LASTNAME  */}
				<div className="mui-textfield mui-textfield--float-label">
					<input type="text" name="lastName" required />
					<label>Nom</label>
				</div>
				{/* Error Message */}
				{errorMessageFor("lastName")}

				{/* --  FIRSTNAME  */}
				<div className="mui-textfield mui-textfield--float-label">
					<input type="text" name="firstName" required />
					<label>Prénom</label>
				</div>
				{/* Error Message */}
				{errorMessageFor("firstName")}

				{/* --  EMAIL  */}
				<div className="mui-textfield mui-textfield--float-label">
					<input type="email" name="email" required />
					<label>Email</label>
				</div>
				{/* Error Message */}
				{errorMessageFor("email")}

				{/* --  PASSWORD  */}
				<div className="mui-textfield mui-textfield--float-label">
					<input type="password" name="email" required />
					<label>Mot de passe</label>
				</div>
				{/* Error Message */}
				{errorMessageFor("password")}

				{/* --  PRIVILEGE  */}
				<div className="mui-select mui-select--float-label">
					<select name="privileges" required>
						<option hidden={true}></option>
						<option disabled="disabled" default={true}>
							Choisir une catégorie (manager et chef sont admin)
						</option>
						<option value="admin">Manager ou Chef</option>
						<option value="employee">Serveur(euse) ou commis</option>
					</select>
					<label>Catégorie d'emploi</label>
				</div>
				{/* Error Message */}
				{errorMessageFor("privileges")}

				<button type="submit" className="mui-btn mui-btn--flat mui">
					Enregistrer
				</button>
			</form>

			{/* Success Message */}
			{auth.successMessage && (
				<div className="info-box">{auth.successMessage}</div>
			)}
		</div>
	);
};

export default _EmployeeRegistrationForm;
