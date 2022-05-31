import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('render Hello world as a text', () => {
        //Arrange
        render(<Greeting />);

        //Act

        //Assert
        const helloWorldElement = screen.getByText('Hello World');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to see you if the button was NOT clicked', () => {
        render(<Greeting />);

        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument()
    });

    test('renders changed if the button was clicked', () => {
        //arrange
        render(<Greeting />);

        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //assert
        const outputElement = screen.getByText('Changed', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('text after clicking is not visible', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();
    })
})


