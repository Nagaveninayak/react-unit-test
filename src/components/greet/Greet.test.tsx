import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';

/**
 * Greet should render the text when the text is passed as a props
 */

test('greet component renders with the text', () => {
    render(<Greet name="nav" />);
    const textElement = screen.getByText('Hello nav');
    expect(textElement).toBeInTheDocument();
})

/**only */
// test.only('greet component renders correctly only', () => {
//     render(<Greet />);
//     const testElement = screen.getByText(/hello/i);
//     expect(testElement).toBeInTheDocument();
// })

/**skip */
test.skip('greet component renders correctly skip', () => {
    render(<Greet />);
    const testElement = screen.getByText(/hello/i);
    expect(testElement).toBeInTheDocument();
})