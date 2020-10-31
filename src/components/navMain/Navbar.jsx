import React from "react";
import { Link } from "react-router-dom";

import NavLinksAdmin from "./_NavLinksAdmin";
import NavLinksClients from "./_NavLinksClients";

const Navbar = (props) => {
	return (
		<div className="NavMain flex-col sp-center">
			<Link to="/">
				<h1 className="title">Pepperoni .</h1>
			</Link>

			<h2 className="sub-title">
				<span>Italian</span> cuisine
				<span> in Paris</span>
			</h2>

			{/* TODO: if admin is logged in */}
			<NavLinksAdmin />

			{/* TODO: else */}
			<NavLinksClients />

			{/* TODO: add burger => media queries... */}
		</div>
	);
};

export default Navbar;
