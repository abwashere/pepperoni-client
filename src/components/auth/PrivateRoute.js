import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const PrivateRoute = ({ component: ProtectedComponent, ...rest }) => {
	const auth = useSelector((state) => state.authStore);

	return (
		<Route
			{...rest}
			render={(props) =>
				auth.isAuthentificated === true ? (
					<ProtectedComponent {...props} />
				) : (
					<Redirect to="/admin/login" />
				)
			}
		/>
	);
};

export default PrivateRoute;
