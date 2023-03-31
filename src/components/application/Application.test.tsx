import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

test(('render application html elements'), () => {
    render(<Application />);

    const nameElement = screen.getByRole("textbox"); /**input || textbox */
    expect(nameElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox"); /**select box has default role combobox */
    expect(selectElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
})