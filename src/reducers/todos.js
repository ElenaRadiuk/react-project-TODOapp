import initialState from './initialState';

const todos = (state = initialState.todos, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            console.log('state ' + state)
            console.log('action text ' + action.name)
            console.log('action id ' + action.id)
            state.newTodo = Object.assign(state.newTodo, {
                    id: action.id,
                    // name: action.name,
                    completed: false
            })
            return {
                ...state,
               
                todoList: [...state.todoList, state.newTodo]
                
            }

        case 'HANDLE_CLOSE_POPUP':
            console.log(state);
            let list = state.todoList.map(todo => todo)
            console.log('state.todoList close' + state.todoList + 'list' + list);
            const filterTodo = state.todoList.filter((task) => task.id !== action.id);
            console.log(filterTodo);
            return {
                ...state,
                todoList: filterTodo
            }

        case 'TOGGLE_TODO': 
            console.log("state" + state.todoList.map(todo => todo) + 'act' +action.id)
            // return state.todoList.map(todo =>
            //     (todo.id === action.id)
            //       ? {...todo, completed: !todo.completed}
            //         : todo
            //     )
            return {
                ...state
            }

        case 'HANDLE_INPUT_CHANGE': 
            return {
                ...state,
                newTodo: {...state.newTodo, ...action.payload}
            }

        default: return state;     
    }
}

export default todos;