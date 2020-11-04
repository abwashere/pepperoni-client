import React from "react";
import { Link, withRouter } from "react-router-dom";
import MenuForm from "../forms/_MenuForm";

const EditMenu = (props) => {
	return (
		<div className="EditMenu AdminPage">
			{props.match.params.mode === "edit" && (
				<React.Fragment>
					<h2 className="sub-title">Modifier la carte</h2>
					<Link to="/menu" className="nav-link" target="_blank">
						Voir la carte
					</Link>
					<Link to="/admin/menu/create" className="nav-link">
						Ajouter un plat
					</Link>
				</React.Fragment>
			)}
			{props.match.params.mode === "create" && (
				<h2 className="sub-title">Ajouter un plat</h2>
			)}

			<MenuForm />
		</div>
	);
};

export default withRouter(EditMenu);
