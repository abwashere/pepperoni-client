import React from "react";
import { Link } from "react-router-dom";

import NavLinksAdmin from "./_NavLinksAdmin";
import NavLinksClients from "./_NavLinksClients";

const Navbar = (props) => {
	return (
		<div className="NavMain">
			<div className="flex-col">
				<Link to="/">
					<h1 className="title">Pepperoni .</h1>
				</Link>

				{/* TODO: if admin is logged in */}
				<NavLinksAdmin />

				{/* TODO: else */}
				<NavLinksClients />

				{/* TODO: add burger => media queries... */}
			</div>
		</div>
	);
};

export default Navbar;
