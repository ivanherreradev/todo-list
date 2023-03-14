export const todoReducer = (initialState, action) => {
    switch (action) {
        case 'Complete Todo':
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    };
                }
                return todo;
            });

        case 'Add Todo':
            return [...initialState, action.payload];

        case 'Delete Todo':
            return initialState.filter((todo) => todo.id !== action.payload);

        case 'Update Todo':
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
