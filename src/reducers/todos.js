import initialState from './initialState';

const todos = (state = initialState.todos, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            console.log(state)
            return {
                ...state,
                todoList: [...state.todoList, state.newTodo]
            }

        case 'TOGGLE_TODO': 
            console.log(state)
            return state.map(todo => 
                (todo.id === action.id)
                  ? {...todo, complited: !todo.complited}
                    : todo
                )

        default: return state;     
    }
}

export default todos;