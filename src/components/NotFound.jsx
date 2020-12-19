import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="NotFound">
			<h3 className="sub-title">404 Not Found</h3>
			<div>
				The page that your are looking for does not exist. <br />
				Go back to the{" "}
				<Link to="/" style={{ padding: "0", textDecoration: "underline" }}>
					home page
				</Link>
				.
			</div>
		</div>
	);
};

export default NotFound;
