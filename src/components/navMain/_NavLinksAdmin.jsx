import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import { useSelector } from "react-redux";

const _NavLinksAdmin = () => {
	const auth = useSelector((state) => state.authStore);

	if (!auth.isAuthentificated) return <div></div>;
	return (
		<div className="NavLinks">
			<ul className="flex-row sp-center">
				<li>
					<NavLink to="/admin/menu/update" className="nav-link">
						Modifier la carte
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin/reservations" className="nav-link">
						Voir les réservations
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default withRouter(_NavLinksAdmin);
