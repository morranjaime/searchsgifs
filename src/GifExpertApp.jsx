import { useState } from 'react'
import { AddCategory, GrifGrid } from './components/';

//No se deben meter en condiciones los hooks

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const onAddNewCategory = (newCategory) => {
    //     if (!categories.includes(newCategory)) {
    //         setCategories([newCategory, ...categories]);
    //     }
    //     // setCategories(cat => [...cat, 'Valorant']);
    // }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} currentCategories={categories} />
            {/* <AddCategory onAddNewCategory={(value) => onAddNewCategory(value)} /> */}
            {/* <button onClick={() => onAddCategory()}>Agregar Categoria</button> */}
            {categories.map(category => <GrifGrid key={category} category={category} />)}
        </>
    )
}
