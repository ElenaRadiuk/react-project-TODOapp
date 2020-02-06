import initialState from './initialState';

const todos = (state = initialState.todos, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            console.log(state)
            return {
                ...state,
               
                todoList: [...state.todoList, state.newTodo]
                
            }

        case 'HANDLE_CLOSE_POPUP':
            console.log(state);
            const filterTodo = state.todoList.filter((task) => task.id !== action.id);
            console.log(filterTodo);
            return {
                ...state,
                todoList: filterTodo
            }

        case 'TOGGLE_TODO': 
            console.log(state)
            return state.map(todo => 
                (todo.id === action.id)
                  ? {...todo, complited: !todo.complited}
                    : todo
                )

        case 'HANDLE_INPUT_CHANGE': 
            return {
                ...state,
                newTodo: {...state.newTodo, ...action.payload}
            }

        default: return state;     
    }
}

export default todos;