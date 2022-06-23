import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('');

    /**
     * 
     * @param {Event} event 
     */
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    /**
     * 
     * @param {Event} event 
     */
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() < 1)
        {
            return;
        }
        
        onAddCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input type='text' placeholder="Find gifs" value={inputValue} onChange={onInputChange}/>
        </form>
    );
}
