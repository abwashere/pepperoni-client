import React from "react";
import { Link, withRouter } from "react-router-dom";
import MenuCreateForm from "../forms/_MenuCreateForm";
import MenuUpdateForm from "../forms/_MenuUpdateForm";

const EditMenu = (props) => {
	document.title = "Admin | modification menu";

	return (
		<div className="EditMenu AdminPage">
			{props.match.params.mode === "update" && (
				<React.Fragment>
					<header className="form-header">
						<h2 className="sub-title">Modifier la carte</h2>
						<Link to="/menu" className="nav-link" target="_blank">
							Voir la carte
						</Link>
						<Link to="/admin/menu/create" className="nav-link">
							Ajouter un plat
						</Link>
					</header>
					<MenuUpdateForm />
				</React.Fragment>
			)}
			{props.match.params.mode === "create" && (
				<React.Fragment>
					<header className="form-header">
						<h2 className="sub-title">Ajouter un plat</h2>
						<Link to="/menu" className="nav-link" target="_blank">
							Voir la carte
						</Link>
					</header>
					<MenuCreateForm />
				</React.Fragment>
			)}
		</div>
	);
};

export default withRouter(EditMenu);
