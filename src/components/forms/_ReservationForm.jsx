import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	postSlot,
	postReservation,
	clearMessages,
} from "./../../store/actions/reservationActions";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { appDates } from "./../../utils/filterCalendarDates";
import { openingHours } from "./../../assets/data/openingHours";

const _ReservationForm = () => {
	const dispatch = useDispatch();
	const slot = useSelector((state) => state.reservationStore.slot);
	const successMessage = useSelector(
		(state) => state.reservationStore.successMessage
	);
	const errorMessage = useSelector(
		(state) => state.reservationStore.errorMessage
	);

	const [step1, setStep1] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const [time, setTime] = useState("");
	const oh = openingHours.filter(
		(moment) => moment.day === startDate?.getDay()
	)[0].hours;

	const [booking, setBooking] = useState({
		slotID: "",
		seats: "",
		client: { clientName: "", clientPhone: "", clientEmail: "" },
	});

	useEffect(() => {
		if (startDate && time) {
			dispatch(postSlot(startDate, time));
			setStep1(true);
		}
	}, [startDate, time]);

	useEffect(() => {
		slot && setBooking({ ...booking, slotID: slot._id });
	}, [slot]);

	const handleChange = (evt) => {
		const key = evt.target.name;
		const value = evt.target.value;
		if (key === "time") setTime(value);
		else if (key === "seats") setBooking({ ...booking, seats: value });
		else
			setBooking({ ...booking, client: { ...booking.client, [key]: value } });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		await dispatch(postReservation(booking));

		setTimeout(() => {
			dispatch(clearMessages());
			setStep1(false);
		}, 6000);
	};

	return (
		<div className="ReservationForm form-container">
			{/* Success Message */}
			{successMessage && <div className="info-box">{successMessage}</div>}
			<form
				className="mui-form"
				onChange={handleChange}
				onSubmit={handleSubmit}
			>
				<div className="flex-row">
					{/* Part 1 : Client pick a date and amount of seats desired */}
					<div className="form-left-side">
						{/* ---------------Reservation Date */}
						<label>Date</label>
						<DatePicker
							dateFormat="yyyy-MM-dd"
							minDate={new Date()}
							maxDate={new Date().setMonth(new Date().getMonth() + 2)} // tables can be booked within the 2 next months
							filterDate={(date) => appDates(date, 1, 2)} // Mondays and Tuesdaus are excluded
							selected={startDate}
							onChange={(date) => {
								setStartDate(date);
								setTime("");
							}}
							required={true}
						/>
						{/* ---------------Reservation Hour */}
						<div className="mui-select">
							<select name="time" onChange={handleChange} value={time} required>
								<option hidden={true}>Sélectionner une heure</option>
								{oh.map((hour, i) => (
									<option key={i}>{hour}</option>
								))}
							</select>
							<label>Heure</label>
						</div>
					</div>
					{/* Part 2 */}
					{step1 && (
						<div className="form-right-side">
							{/* ---------------Reservation Capacity */}
							<div className="mui-textfield mui-textfield--float-label">
								<input
									type="number"
									max="20"
									name="seats"
									onChange={handleChange}
									required
								/>
								<label>Nombre de personnes</label>
							</div>
							{/* ---------------ClientName */}
							<div className="mui-textfield mui-textfield--float-label">
								<input
									type="text"
									name="clientName"
									onChange={handleChange}
									required
								/>
								<label>Votre nom</label>
							</div>
							{/* ---------------ClientPhone */}
							<div className="mui-textfield mui-textfield--float-label">
								<input
									type="tel"
									name="clientPhone"
									onChange={handleChange}
									required
								/>
								<label>Téléphone</label>
							</div>
							{/* ---------------ClientEmail */}
							<div className="mui-textfield mui-textfield--float-label">
								<input
									type="email"
									name="clientEmail"
									onChange={handleChange}
								/>
								<label>Email (optionnel)</label>
							</div>
							{/* ---------------Optionnal TODO: later */}
							<div className="mui-textfield mui-textfield--float-label">
								<textarea></textarea>
								<label>Une demande particulière ?</label>
							</div>

							{/* ------------------------------------------------------------ */}
							<button
								type="submit"
								onSubmit={handleSubmit}
								className="mui-btn mui-btn--raised"
							>
								Réserver
							</button>
							{/* Error Message */}
							{errorMessage && (
								<div className="form-error-msg">
									{errorMessage.unavailability} :(
									<br />
								</div>
							)}
						</div>
					)}
				</div>
			</form>
		</div>
	);
};

export default _ReservationForm;
