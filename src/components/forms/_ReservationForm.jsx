import React from "react";

const handleChange = () => {};
const handleSubmit = () => {};

const _ReservationForm = () => {
	return (
		<div className="ReservationForm form-container">
			<form
				className="mui-form"
				onChange={handleChange}
				onSubmit={handleSubmit}
			>
				<div className="mui-textfield">
					<input type="datetime-local" required />
					<label>Sélectionnez une date</label>
				</div>
				<div className="mui-textfield mui-textfield--float-label">
					<input type="number" max="12" required />
					<label>Nombre de personnes</label>
				</div>
				<div className="mui-textfield mui-textfield--float-label">
					<input type="text" required />
					<label>Votre nom</label>
				</div>
				<div className="mui-textfield mui-textfield--float-label">
					<input type="tel" required />
					<label>Téléphone</label>
				</div>
				<div className="mui-textfield mui-textfield--float-label">
					<input type="email" />
					<label>Email (optionnel)</label>
				</div>
				<div className="mui-textfield mui-textfield--float-label">
					<textarea></textarea>
					<label>Une demande particulière ?</label>
				</div>

				<button type="submit" className="mui-btn mui-btn--raised">
					Réserver
				</button>
			</form>
		</div>
	);
};

export default _ReservationForm;
