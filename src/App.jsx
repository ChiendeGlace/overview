import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Overview from './components/Overview';
import Form from './components/Form';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addItem = (newItem) => {
        setTasks((prevItems) => [...prevItems, newItem]);
    };
    const deleteItem = (id) => {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.filter((task) => task.id !== id);
            return updatedTasks.map((task, index) => ({
                ...task,
                id: index + 1,
                mode: 'read',
            }));
        });
    };
    const editMode = (id, prop) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                if (task.id == id && prop == 'edit') {
                    return { ...task, mode: 'edit' };
                } else if (task.id == id && prop == 'read') {
                    return { ...task, mode: 'read' };
                }
                return task;
            });
        });
    };
    const editValue = (id, inputValue) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                if (task.id == id) {
                    return { ...task, value: inputValue, mode: 'read' };
                }
                return task;
            });
        });
    };
    return (
        <div>
            <Form tasks={tasks} addItem={addItem} setTasks={setTasks} />
            <Overview
                tasks={tasks}
                deleteItem={deleteItem}
                editMode={editMode}
                editValue={editValue}
            />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
