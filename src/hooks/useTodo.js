import { useReducer } from 'react';
import { todoReducer } from '../Context/todoReducer';

export const useTodo = () => {
    const initialState = [];

    const [state, dispatch] = useReducer(todoReducer, initialState, init);
};
