import React from 'react';
import TodoAdd from '../TodoAdd/TodoAdd';
import TodoList from '../TodoList/TodoList';

const Wrapper = () => {
    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <h3>Tasks:</h3>
                <h3>Pendings:</h3>
            </div>

            <div>
                <h3>Add Todo</h3>
                <TodoAdd />
            </div>

            <TodoList />
        </div>
    );
};

export default Wrapper;
