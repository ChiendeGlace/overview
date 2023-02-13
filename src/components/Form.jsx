import React, { useState } from 'react';
import uniqid from 'uniqid';

const Form = ({ tasks, addItem, setTasks }) => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const nextId = tasks.length + 1
        addItem({value:inputValue, id: nextId, mode: 'read'});
        setInputValue('');
    };
    const handleClick = (e) => {
        setTasks([])
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="input-field">Add tasks</label>
            <input
                type="text"
                id="input-field"
                placeholder="Go shopping at 7PM"
                value={inputValue}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
            <button type="reset" onClick={handleClick}>Reset</button>
        </form>
    );
};

export default Form;
