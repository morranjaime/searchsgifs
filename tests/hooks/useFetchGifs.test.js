import { renderHook, waitFor } from "@testing-library/react";
import { useFecthGifs } from "../../src/hooks/useFecthGifs"

describe('Prueba en el hook useFecthGifs', () => {
    test('debe regresar el estado inicial', () => {
        const { result } = renderHook(() => useFecthGifs('One Punch'));

        //console.log(result);
        const { images, isLoading } = result.current;

        expect(images).toHaveLength(0);
        expect(isLoading).toBeTruthy();

    });

    test('debe devolver un array de imagenes y isLoading en false', async () => {
        const { result } = renderHook(() => useFecthGifs('One Punch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 1000
            }
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
})