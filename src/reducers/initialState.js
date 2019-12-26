const initialState = {
    todos: {
        todoList: [],
        newTodo: {
            id: '',
            name: '',
            completed: false
        }
    },
    VisibilityFilters: {
        filters: [],
        SHOW_ALL: true,
        SHOW_ACTIVE: true,
        SHOW_COMPLETED: true
    }
}

export default initialState;