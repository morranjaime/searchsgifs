import { getGifs } from "../helpers/getGifs"
import { useState, useEffect } from "react";

export const useFecthGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        //cuando inicia
        getImages();

        return () => {
            //cuando termina
        }
    }, [])// si los corchetes esta vacio solo se de dispara la primera que sea crea y construye el componente


    return {
        images,// images: images, es lo mismo
        isLoading//isLoading: isLoading, es lo mismo
    }
}