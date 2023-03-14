import React from 'react';

const TodoAdd = () => {
    return (
        <form>
            <input type="text" name="description" placeholder="What to do?" />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoAdd;
