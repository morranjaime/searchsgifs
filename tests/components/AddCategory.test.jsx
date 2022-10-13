import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from "../../src/components";

const inputValue = 'Saitama';

describe('Pruebas en <AddCategory/>', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory setCategories={() => { }} currentCategories={[]} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } });
        expect(input.value).toBe(inputValue);
        //screen.debug();
    });

    test('debe de llamar a setCategories si el input tiene valor', () => {

        const setCategories = jest.fn();

        render(<AddCategory setCategories={(setCategories)} currentCategories={[]} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenLastCalledWith([inputValue]);


        // screen.debug();1
    });


    test('no debe de llamar a setCategories si el input tiene valor', () => {

        const setCategories = jest.fn();

        render(<AddCategory setCategories={(setCategories)} currentCategories={[]} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(setCategories).not.toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(0);

        // screen.debug();
    });
});