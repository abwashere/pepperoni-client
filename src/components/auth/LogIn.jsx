import React from "react";
import LoginForm from "../forms/_LoginForm";

const LogIn = () => {
	return (
		<div className="Login AdminPage">
			<header className="form-header">
				<h2 className="sub-title">Espace réservé au personnel</h2>
				<h3>Entrez vos identifiants</h3>
			</header>
			<LoginForm />
		</div>
	);
};

export default LogIn;
