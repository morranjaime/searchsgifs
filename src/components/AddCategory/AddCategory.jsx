
import { useState } from 'react';

export const AddCategory = (props) => {

    const { setCategories, currentCategories } = props;// para pasar el estado

    // const { onAddNewCategory } = props;

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length >= 1 && !currentCategories.map(category => category.toUpperCase()).includes(inputValue.toUpperCase())) {
            setCategories([inputValue, ...currentCategories]);
            //setCategories(categories =>[inputValue, ...categories]);
            // onAddNewCategory(inputValue)
            setInputValue('');
        }

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type='text' placeholder='Buscar gif' value={inputValue} onChange={(event) => onInputChange(event)} />
        </form>
    )
}
