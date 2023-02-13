import React, { useState } from 'react';

const Overview = ({ tasks, deleteItem, editMode, editValue }) => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (id, inputValue) => {
        editValue(id, inputValue)
    }
    return (
        <div>
            {tasks.map((task) => {
                if (task.mode == 'read') {
                    return (
                        <div key={task.id} className="list-item">
                            <p>
                                {task.id}. {task.value}
                            </p>
                            <button onClick={() => editMode(task.id, 'edit')}>
                                Edit
                            </button>
                            <button onClick={() => deleteItem(task.id)}>
                                Delete
                            </button>
                        </div>
                    );
                } else {
                    return (
                        <div key={task.id} className="list-item">
                            <form action="#" onSubmit={(e) => {
                                e.preventDefault()
                                handleSubmit(task.id, inputValue)
                                }}>
                                <input
                                    type="text"
                                    id="input-field"
                                    placeholder="Input new value"
                                    value={inputValue}
                                    onChange={handleChange}
                                />
                                <button type="submit">Save</button>
                                <button onClick={() => editMode(task.id, 'read')}>Cancel</button>
                            </form>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Overview;
