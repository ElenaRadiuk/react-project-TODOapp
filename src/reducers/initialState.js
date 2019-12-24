const initialState = {
    todos: {
        todoList: [],
        newTodo: {
            id: '',
            text: '',
            completed: false
        }
    },
    VisibilityFilters: {
        SHOW_ALL: true,
        SHOW_ACTIVE: true,
        SHOW_COMPLETED: true
    }
}

export default initialState;