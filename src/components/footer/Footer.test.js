import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("timetable component should be rendered", () => {
    render(<Footer />);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });

  test("timetable component should display hours", () => {
    render(<Footer />);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toHaveTextContent(/12h/i);
    expect(tableElement).toHaveTextContent(/23h/i);
  });

  test("contact component should be rendered", () => {
    render(<Footer />);
    const contactDivElement = screen.getByTestId("pepperoni-phone-number");
    expect(contactDivElement).toBeInTheDocument();
  });

  test("contact component should display correct phone number", () => {
    render(<Footer />);
    const contactDivElement = screen.getByTestId("pepperoni-phone-number");
    expect(contactDivElement).toHaveTextContent(/01 23 45 67 89/i);
  });
});
