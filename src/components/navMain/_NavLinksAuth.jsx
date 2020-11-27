import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
	isLoggedIn,
	logout,
	clearMessages,
} from "./../../store/actions/authActions";

const _NavLinksAuth = (props) => {
	const auth = useSelector((state) => state.authStore);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(isLoggedIn());
	}, []);

	const handleLogout = () => {
		dispatch(logout());
		setTimeout(() => {
			dispatch(clearMessages());
		}, 4000);
		props.history.push("/admin/login");
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
						<li className="nav-link" style={{ cursor: "default" }}>
							{auth.loggedUser.privileges} : <b>{auth.loggedUser.firstName}</b>
						</li>
						{auth.loggedUser.privileges === "admin" && (
							<NavLink to="/admin/staff" className="nav-link">
								Liste du Personnel
							</NavLink>
						)}
						<li onClick={handleLogout} className="nav-link">
							Déconnexion
						</li>
					</>
				)}
			</ul>
		</div>
	);
};

export default withRouter(_NavLinksAuth);
