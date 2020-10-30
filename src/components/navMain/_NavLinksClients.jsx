import React from "react";
import { Link, withRouter } from "react-router-dom";

const _NavLinksClients = (props) => {
	return (
		<div className="NavLinks">
			<ul className="flex-row sp-center">
				<li>
					<Link to="/menu" className="nav-link">
						La Carte
					</Link>
				</li>
				<li>
					<Link to="/reservation" className="nav-link">
						Réserver une table
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default withRouter(_NavLinksClients);
