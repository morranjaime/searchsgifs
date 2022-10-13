import React from 'react'
import Proptypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFecthGifs } from '../hooks/useFecthGifs';

export const GrifGrid = (props) => {

    const { category } = props;

    const { images, isLoading } = useFecthGifs(category);

    return (
        <>
            <h2> {category}</h2>
            {isLoading && <h2>Cargando....</h2>}
            <div className='card-grid'>
                {images.map((image) => <GifItem key={image.id} {...image} />)}
            </div>
        </>

    )
}

GrifGrid.propTypes =
{
    category: Proptypes.string.isRequired
}
