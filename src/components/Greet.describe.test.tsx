import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe.only('Greet', () => {
    test('Testing the Greet with describe', () => {
        render(<Greet />);
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    })
})
