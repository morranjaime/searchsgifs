
import { useState } from 'react';
import Proptypes from 'prop-types';

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
        <form onSubmit={(event) => onSubmit(event)} aria-label='form'>
            <input type='text' placeholder='Buscar gif' value={inputValue} onChange={(event) => onInputChange(event)} />
        </form>
    )
}


AddCategory.propTypes =
{
    setCategories: Proptypes.func.isRequired,
    currentCategories: Proptypes.array.isRequired
}