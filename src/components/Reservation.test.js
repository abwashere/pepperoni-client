import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import Reservation from "./Reservation";
import { mockedSlotsResponse } from "../api/fakeData";
import api from "../api/reservationApiHandler";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../store/reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// provide the store to a mocked reservation
const MockedReservation = () => {
  return (
    <Provider store={store}>
      <Reservation />
    </Provider>
  );
};

// mock reservation api
jest.mock("../api/reservationApiHandler");

// freeze time before all and reset real time after all
const TODAY = Date.now;
beforeAll(() => {
  global.Date.now = jest.fn(() => new Date("2022-04-05").getTime());
});
afterAll(() => {
  global.Date.now = TODAY;
});

beforeEach(() => {
  // hide console error about CSS in DatePicker component
  // https://dev.to/martinemmert/hide-red-console-error-log-wall-while-testing-errors-with-jest-2bfn
  jest.spyOn(console, "error");
  console.error.mockImplementation(() => null);

  // mock api call
  api.postSlot.mockResolvedValueOnce(mockedSlotsResponse);
});

afterEach(() => {
  // restore console errors and
  console.error.mockRestore();
  jest.resetAllMocks();
});

// FIXME : uncaught error, but test is passing 
// * fix and unskip test
describe.skip("Reservation", () => {
  it("should be possible to book a table", async () => {
    render(<MockedReservation />);

    // Reservation component is rendered with title displayed
    const titleDivElement = screen.getByText(/réserver une table/i);
    expect(titleDivElement).toBeInTheDocument();

    // Pick a date
    const datePickerInput = screen.getByRole("textbox");
    fireEvent.click(datePickerInput);
    await waitFor(() =>
      fireEvent.change(datePickerInput, { target: { value: "2022-04-20" } })
    );

    // Choose the hour
    const timeSelect = screen.getByRole("combobox");
    fireEvent.click(timeSelect);
    await waitFor(() =>
      fireEvent.change(timeSelect, { target: { value: "20h00" } })
    );

    // Fill informations for seats, name, phone, email
    const seatsInput = screen.getByRole("spinbutton");
    fireEvent.change(seatsInput, { target: { value: 4 } });

    const nameInput = screen.getByLabelText(/nom pour la réservation/i);
    fireEvent.change(nameInput, { target: { value: "Audrey Testing" } });

    const phoneInput = screen.getByLabelText(/numéro de tél/i);
    fireEvent.change(phoneInput, { target: { value: "0601020304" } });

    const emailInput = screen.getByLabelText(/votre adresse email/i);
    fireEvent.change(emailInput, { target: { value: "audrey.test@jest.com" } });

    // Submit
    const submitButton = screen.getByRole("button", { name: /réserver/i });
    fireEvent.click(submitButton);

    // Axios call to the server with the informations
    // const reqPayload = {
    //   slotID: mockedSlotsResponse.data.slot._id,
    //   seats: Number(seatsInput.value),
    //   client: {
    //     clientName: nameInput.value,
    //     clientPhone: phoneInput.value,
    //     clientEmail: emailInput.value,
    //   },
    // };
    expect(api.postReservation).toHaveBeenCalled()
  });
});
