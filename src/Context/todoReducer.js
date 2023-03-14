import { ADD__TODO, DELETE__TODO, UPDATE__TODO, COMPLETE__TODO } from './actions';

export const todoReducer = (initialState, action) => {
    switch (action) {
        case COMPLETE__TODO:
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    };
                }
                return todo;
            });

        case ADD__TODO:
            return [...initialState, action.payload];

        case DELETE__TODO:
            return initialState.filter((todo) => todo.id !== action.payload);

        case UPDATE__TODO:
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        description: action.payload.description,
                    };
                }
                return todo;
            });

        default:
            initialState;
    }
};
