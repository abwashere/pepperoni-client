import React from "react";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, logout } from "./../../store/actions/authActions";

const _NavLinksAuth = (props) => {
	const auth = useSelector((state) => state.authStore);

	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());

		// set timout to dispatch(clearMessages())
		// then redirect
	};

	return (
		<div className="NavLinksAuth">
			<ul className="flex-row">
				{!auth.userIsLoggedIn ? (
					<li>
						<NavLink to="/admin/login" className="nav-link">
							Personnel
						</NavLink>
					</li>
				) : (
					<>
						<li>
							Utilisateur : <b>{auth.loggedUser.firstName}</b> -{" "}
							{auth.loggedUser.privileges}
						</li>
						<li onClick={handleLogout} className="nav-link">
							Déconnexion
						</li>
					</>
				)}
			</ul>
		</div>
	);
};

export default _NavLinksAuth;
