import { render, screen, fireEvent } from '@testing-library/react'
import { GifItem } from "../../src/components/GifItem"

describe('Prueba en GifItem', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    test('Realizacion de snapshp', () => {
        const { container } = render(
            <GifItem title={title} url={url} />
        );

        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(
            <GifItem title={title} url={url} />
        );

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el titulo en el componente', () => {

        render(
            <GifItem title={title} url={url} />
        );

        expect(screen.getByText(title)).toBeTruthy();

    });
})