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
  let maxCapacity;
  if (slot)
    maxCapacity = Math.max(...slot.tables.map((table) => table.capacity));

  const successMessage = useSelector(
    (state) => state.reservationStore.successMessage
  );
  const errorMessage = useSelector(
    (state) => state.reservationStore.errorMessage
  );

  const [step1, setStep1] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState("");
  const openHours = openingHours.filter(
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, time]);

  useEffect(() => {
    slot && setBooking({ ...booking, slotID: slot._id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slot]);

  const errorMessageFor = (field) => {
    if (errorMessage?.[field])
      if (field === "unavailability") {
        return (
          <div className="form-error-msg">
            {errorMessage.unavailability}
            <br /> :(
          </div>
        );
      } else {
        return (
          <div className="form-error-msg">
            <i className="fas fa-exclamation-triangle"></i>
            {"   "}
            {errorMessage[field]}
          </div>
        );
      }
  };

  const handleChange = (evt) => {
    const key = evt.target.name;
    const value = evt.target.value;
    if (key === "time") setTime(value);
    else if (key === "seats") setBooking({ ...booking, seats: Number(value) });
    else
      setBooking({ ...booking, client: { ...booking.client, [key]: value } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(postReservation(booking));

    setTimeout(() => {
      dispatch(clearMessages());
      // if (!errorMessage) setStep1(false);
    }, 10000);
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
            <div className="mui-select">
              <DatePicker
                className="datepicker"
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                maxDate={new Date().setMonth(new Date().getMonth() + 2)} // tables can be booked within the 2 next months
                filterDate={(date) => appDates(date, 1)} // Mondays are excluded
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setTime("");
                }}
                required={true}
              />
              <label>Date</label>
            </div>
            {/* ---------------Reservation Hour */}
            <div className="mui-select">
              <select name="time" onChange={handleChange} value={time} required>
                <option hidden={true}>Choix</option>
                {openHours &&
                  openHours.map((hour, i) => <option key={i}>{hour}</option>)}
              </select>
              <label>Heure</label>
            </div>
            {/* Error Messages */}
            {errorMessageFor("time")}
            {errorMessageFor("unavailability")}
          </div>

          {/* Part 2 */}
          {step1 && (
            <div className="form-right-side">
              {/* ---------------Reservation Seats */}
              <div className="mui-textfield mui-textfield--float-label">
                <input
                  type="number"
                  min="1"
                  max={maxCapacity}
                  name="seats"
                  onChange={handleChange}
                  required
                />
                <label>Nombre de personnes</label>
              </div>
              {errorMessageFor("capacity")}
              {/* ---------------ClientName */}
              <div className="mui-textfield mui-textfield--float-label">
                <input
                  aria-label="nom pour la réservation"
                  type="text"
                  name="clientName"
                  onChange={handleChange}
                  required
                />
                <label>Votre nom</label>
              </div>
              {errorMessageFor("clientName")}
              {/* ---------------ClientPhone */}
              <div className="mui-textfield mui-textfield--float-label">
                <input
                  aria-label="numéro de téléphone"
                  type="tel"
                  name="clientPhone"
                  onChange={handleChange}
                  required
                />
                <label>Téléphone</label>
              </div>
              {errorMessageFor("clientPhone")}
              {/* ---------------ClientEmail */}
              <div className="mui-textfield mui-textfield--float-label">
                <input
                  aria-label="votre adresse email"
                  type="email"
                  name="clientEmail"
                  onChange={handleChange}
                />
                <label>Email (optionnel)</label>
              </div>
              {errorMessageFor("clientEmail")}

              {/* ------------------------------------------------------------ */}
              <div className="information-text">
                Nos tables accueillent jusqu'à {maxCapacity} couverts. <br />
                Si vous souhaitez réserver pour un plus grand nombre de
                personnes, merci de nous appeler directement.
              </div>
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="mui-btn mui-btn--raised"
              >
                Réserver
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default _ReservationForm;
