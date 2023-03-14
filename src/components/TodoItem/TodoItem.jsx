import React from 'react';
import { FaTrash } from 'react-icons/fa';
import TodoUpdate from '../TodoUpdate/TodoUpdate';

const TodoItem = () => {
    return (
        <li>
            <span>
                <label htmlFor="">Learning react</label>
            </span>
            <TodoUpdate />
            <button>
                <FaTrash />
            </button>
        </li>
    );
};

export default TodoItem;
