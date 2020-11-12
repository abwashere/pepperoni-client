import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const _NavLinksAuth = (props) => {
	return (
		<div className="NavLinksAuth">
			<ul className="flex-row">
				{/* TODO: if admin is logged in or out... */}
				<li>
					<NavLink to="/admin/signin" className="nav-link">
						Personnel
					</NavLink>
				</li>

				<li>
					<NavLink to="/admin/signout" className="nav-link">
						Déconnexion
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default withRouter(_NavLinksAuth);
