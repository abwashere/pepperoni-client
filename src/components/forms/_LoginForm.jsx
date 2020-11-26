import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { login } from "./../../store/actions/authActions";

const _LoginForm = () => {
	const auth = useSelector((state) => state.authStore);

	const dispatch = useDispatch();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch(
			login({
				pseudo: evt.target.elements[0].value,
				password: evt.target.elements[1].value,
			})
		);
		// evt.target.elements[0].value = "";
		// evt.target.elements[1].value = "";
	};

	return (
		<div className="LoginForm form-container">
			<form className="mui-form" onSubmit={handleSubmit}>
				<div className="mui-textfield mui-textfield--float-label">
					<input type="text" name="pseudo" required />
					<label>Pseudo</label>
				</div>
				<div className="mui-textfield mui-textfield--float-label">
					<input type="password" name="password" required />
					<label>Mot de passe</label>
				</div>
				<button type="submit" className="mui-btn edit">
					Valider
				</button>
			</form>
			{/* MESSAGES */}
			{auth.successMessage && (
				<div className="info-box">{auth.successMessage}</div>
			)}
			{auth.invalidCredentials && (
				<div className="form-error-msg">
					<i className="fas fa-exclamation-triangle"></i>
					{auth.invalidCredentials}
				</div>
			)}
		</div>
	);
};

export default _LoginForm;
