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
        

        case 'ADD_SUB_TODO':
        console.log('state ' + state)
        console.log('action text ' + action.name)
        console.log('action id ' + action.id)
        // let activeTodoParent
        state.newSubTodo = Object.assign(state.newSubTodo, {
            id: action.id,
            // name: action.name,
            completed: false
        })
        return {
            ...state,
            subTodoList: [...state.subTodoList, state.newSubTodo]
        }
        // case 'HANDLE_CLOSE_POPUP':
        //     console.log(state);
        //     let list = state.todoList.map(todo => todo)
        //     console.log('state.todoList close' + state.todoList + 'list' + list);
        //     let filterTodo = state.todoList.filter((task) => task.id !== action.id);
        //     console.log(filterTodo);
        //     return {
        //         ...state,
        //         todoList: filterTodo
        //     }

        case 'TOGGLE_TODO': 
            console.log("todoList" + state.todoList);
            let toggleTodo = state.todoList.map((task) => task.id === action.id 
                ? {...task, completed: !task.completed } : task);

            console.log("toggleTodo" + toggleTodo)
               return {
                ...state,
                todoList: toggleTodo
            }

        case 'ACTIVE_TODO':
            console.log("todoList" + state.todoList);
            let activeTodo = state.todoList.map((task) => task.id === action.id 
                ? {...task, active: !task.active} : {...task, active: false});
            
            let activeTab = state.todoList.map((task) => task.id === action.id 
                ? {...state, activeTab: task.id} : {...state, activeTab: ''});    

            console.log("activeTodo777" + activeTodo + activeTab)
            console.log(state)
            return {
                ...state,
                todoList: activeTodo,
                activeTab: activeTab
            }

        case 'HANDLE_INPUT_CHANGE': 
            return {
                ...state,
                newTodo: {...state.newTodo, ...action.payload}
            }

        case 'HANDLE_INPUT_CHANGE_SUB':
        return {
            ...state,
            newSubTodo: {
                ...state.newSubTodo, ...action.payload
            }
        }

        default: return state;     
    }
}

export default todos;