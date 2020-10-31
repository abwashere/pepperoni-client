import React from "react";

const handleChange = () => {};
const handleSubmit = () => {};

const _ReservationForm = () => {
	return (
		<div className="ReservationForm">
			<form class="mui-form">
				<div class="mui-textfield">
					<input type="datetime-local" required />
					<label>Sélectionnez une date *</label>
				</div>
				<div class="mui-textfield mui-textfield--float-label">
					<input type="number" max="12" required />
					<label>Nombre de personnes *</label>
				</div>
				<div class="mui-textfield mui-textfield--float-label">
					<input type="text" required />
					<label>Votre nom *</label>
				</div>
				<div class="mui-textfield mui-textfield--float-label">
					<input type="tel" required />
					<label>Téléphone *</label>
				</div>
				<div class="mui-textfield mui-textfield--float-label">
					<input type="email" />
					<label>Email</label>
				</div>
				<div class="mui-textfield mui-textfield--float-label">
					<textarea></textarea>
					<label>Une demande particulière ?</label>
				</div>

				<button type="submit" class="mui-btn mui-btn--raised">
					Submit
				</button>
			</form>
		</div>
	);
};

export default _ReservationForm;
