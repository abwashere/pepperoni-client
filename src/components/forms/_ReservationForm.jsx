import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { appDates } from "./../../utils/filterCalendarDates";

const handleChange = () => {};
const handleSubmit = () => {};

const _ReservationForm = () => {
	const [startDate, setStartDate] = useState();

	return (
		<div className="ReservationForm form-container">
			<form
				className="mui-form"
				onChange={handleChange}
				onSubmit={handleSubmit}
			>
				<div className="flex-row">
					<div className="form-left-side">
						<DatePicker
							placeholderText="Choisir une date"
							dateFormat="dd/MM/yyyy"
							minDate={new Date()}
							maxDate={new Date().setMonth(new Date().getMonth() + 2)}
							filterDate={(date) => appDates(date, 1, 2)}
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							required={true}
						/>
						<div className="mui-textfield mui-textfield--float-label">
							<input type="number" max="12" required />
							<label>Nombre de personnes</label>
						</div>
						<div class="mui-textfield mui-textfield--float-label">
							<input type="email" required />
							<label>Required Email Address</label>
						</div>
					</div>
					<div className="form-right-side">
						{/* !!! conditional part of the form => if date and capacity are ok */}
						<div className="mui-select">
							<select name="category" required>
								<option value="">Sélectionner une heure</option>
								{/* TODO: map ici */}
								<option>Option 1</option>
								<option>Option 2</option>
							</select>
							<label>Heure</label>
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
					</div>
				</div>
			</form>
		</div>
	);
};

export default _ReservationForm;
