import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import ReservationForm from "./_ReservationForm";
import { mockedSlotsResponse } from "../../api/fakeData";
import api from "../../api/reservationApiHandler";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./../../store/reducers/rootReducer";
import { DateTime } from "luxon";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const MockedReservationForm = () => {
  return (
    <Provider store={store}>
      <ReservationForm />
    </Provider>
  );
};

// mock reservation api
jest.mock("../../api/reservationApiHandler");

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

describe("reservation form component", () => {
  it("should render a date picker component with today's date", () => {
    render(<MockedReservationForm />);
    const datePickerInput = screen.getByDisplayValue(
      DateTime.now().toFormat("yyyy-MM-dd")
    );
    const datePickerInputOtherWay = screen.getByRole("textbox");
    expect(datePickerInput).toBeInTheDocument();
    expect(datePickerInputOtherWay).toBeInTheDocument();
  });

  it("should render a time select component with Choix as default option", () => {
    render(<MockedReservationForm />);
    const timeSelect = screen.getByRole("combobox");
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveDisplayValue("Choix");
  });

  it("Monday and Sunday should be unavailable days", () => {
    render(<MockedReservationForm />);

    const datePickerInput = screen.getByRole("textbox");

    fireEvent.click(datePickerInput);

    const mondayButtons = screen.getAllByLabelText(/not available monday/i);
    const sundayButtons = screen.getAllByLabelText(/not available sunday/i);

    expect(mondayButtons.length).toBeGreaterThan(1);
    expect(sundayButtons.length).toBeGreaterThan(1);
  });

  it("should render right side of the form once date and hour are picked", async () => {
    render(<MockedReservationForm />);

    const datePickerInput = screen.getByRole("textbox");
    fireEvent.click(datePickerInput);
    await waitFor(() =>
      fireEvent.change(datePickerInput, { target: { value: "2022-04-05" } })
    );
    expect(datePickerInput).toHaveValue("2022-04-05");

    const timeSelect = screen.getByRole("combobox");
    fireEvent.click(timeSelect);
    await waitFor(() =>
      fireEvent.change(timeSelect, { target: { value: "20h30" } })
    );
    expect(timeSelect).toHaveValue("20h30");

    const seatsInput = screen.getByRole("spinbutton"); // number input ("nombre de personnes")
    const textInputs = screen.getAllByRole("textbox");
    const submitButton = screen.getByRole("button", { name: /réserver/i });
    expect(seatsInput).toBeInTheDocument();
    expect(textInputs.length).toBe(4); // datepicker + text inputs (name, phone, email)
    expect(submitButton).toBeInTheDocument();
  });

  it("should not render right side of the form if date or hour is missing", async () => {
    render(<MockedReservationForm />);

    const datePickerInput = screen.getByRole("textbox");
    fireEvent.click(datePickerInput);
    await waitFor(() =>
      fireEvent.change(datePickerInput, { target: { value: "2022-04-05" } })
    );

    const timeSelect = screen.getByRole("combobox");
    fireEvent.click(timeSelect);
    await waitFor(() =>
      fireEvent.change(timeSelect, { target: { value: "" } })
    );

    // "queryBy" returns null whereas "getBy" returns an error
    const seatsInput = screen.queryByRole("spinbutton");
    const textInputs = screen.getAllByRole("textbox");
    const submitButton = screen.queryByRole("button", { name: /réserver/i });

    expect(seatsInput).not.toBeInTheDocument();
    expect(textInputs.length).toBe(1); // only datepicker
    expect(submitButton).not.toBeInTheDocument();
  });
});
