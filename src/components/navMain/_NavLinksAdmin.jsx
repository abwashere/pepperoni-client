import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "./../../store/actions/authActions";

const _NavLinksAdmin = (props) => {
	const auth = useSelector((state) => state.authStore);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(isLoggedIn());
	}, [dispatch]);

	if (!auth.userIsLoggedIn) return <div></div>;
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
