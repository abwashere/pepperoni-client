import React from "react";

const _Contact = () => {
	return (
		<div className="Contact">
			<div className="contact">
				<p className="col-title">CONTACT</p>
				<p data-testid="pepperoni-phone-number">
					<i className="fas fa-phone fa-sm icon"></i> 01 23 45 67 89
				</p>
			</div>
			<div className="contact">
				<p className="col-title">NOS RESEAUX SOCIAUX</p>
				<div>
					<a href="/" noopener="true">
						<i className="fab fa-facebook-f fa-2x icon"></i>
					</a>
					<a href="/" noopener="true">
						<i className="fab fa-instagram fa-2x icon"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default _Contact;
