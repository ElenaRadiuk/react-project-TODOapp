const initialState = {
    todos: {
        todoList: [],
        newTodo: {
            _id: '',
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
    },
    ui: {
        isPopupHidden: true
    }
}

export default initialState;