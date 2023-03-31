import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe('Greet', () => {
    /**skip it */
    xit('Testing the Greet with describe xit', () => {
        render(<Greet />);
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    })

    /**run that particular code */
    fit('Testing the Greet with describe fit', () => {
        render(<Greet />);
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    })

    describe('Nested', () => {
        it('Nested greet', () => {
            render(<Greet />);
            const textElement = screen.getByText('Hello');
            expect(textElement).toBeInTheDocument();
        })
    })
})
