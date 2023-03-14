import { useReducer } from 'react';
import { todoReducer } from '../Context/todoReducer';
import { ADD__TODO, DELETE__TODO, COMPLETE__TODO, UPDATE__TODO } from '../Context/actions';

export const useTodo = () => {
    const initialState = [];

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const handleAddTodo = (todo) => {
        const action = {
            type: ADD__TODO,
            payload: todo,
        };

        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        const action = {
            type: DELETE__TODO,
            payload: id,
        };

        dispatch(action);
    };

    const handleUpdateTodo = (id, description) => {
        const action = {
            type: UPDATE__TODO,
            payload: {
                id,
                description,
            },
        };

        dispatch(action);
    };

    const handleCompleteTodo = (id) => {
        const action = {
            type: COMPLETE__TODO,
            payload: id,
        };

        dispatch(action);
    };

    return { handleAddTodo, handleDeleteTodo, handleUpdateTodo, handleCompleteTodo };
};
