import { render, screen } from "@testing-library/react";
import { GrifGrid } from "../../src/components";
import { useFecthGifs } from "../../src/hooks/useFecthGifs";

jest.mock("../../src/hooks/useFecthGifs");

describe('Pruebas en <GifGrid/>', () => {

    const category = 'One Punch';

    test('debe mostar loading', () => {

        useFecthGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GrifGrid category={category} />);
        // screen.debug();

        expect(screen.getByText('Cargando....')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('debe mostar item cuando se cargan las imagenes mediante useFecthGifs', () => {

        const gifs = [
            {
                id: 'ABD',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFecthGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GrifGrid category={category} />);
        expect(screen.getAllByRole('img')).toHaveLength(2);
        // screen.debug();
    });
})