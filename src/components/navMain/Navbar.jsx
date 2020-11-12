import React from "react";
import { Link } from "react-router-dom";

import NavLinksAuth from "./_NavLinksAuth";
import NavLinksAdmin from "./_NavLinksAdmin";
import NavLinksClients from "./_NavLinksClients";

const Navbar = (props) => {
	return (
		<div className="NavMain flex-col sp-center">
			<NavLinksAuth />

			<header className="nav-header">
				<Link to="/">
					<h1 className="nav-title">Pepperoni .</h1>
				</Link>

				<h2 className="nav-subtitle">
					<span>Italian</span> cuisine
					<span> in Paris</span>
				</h2>
			</header>

			{/* TODO: if admin is logged in */}
			<NavLinksAdmin />

			{/* TODO: else */}
			<NavLinksClients />

			{/* TODO: add burger => media queries... */}
		</div>
	);
};

export default Navbar;
