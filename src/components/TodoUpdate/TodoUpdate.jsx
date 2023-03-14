import React from 'react';
import { FaEdit } from 'react-icons/fa';

const TodoUpdate = () => {
    return (
        <form>
            <input type="text" name="description" placeholder="What to do?" />
            <button type="submit">
                <FaEdit />
            </button>
        </form>
    );
};

export default TodoUpdate;
