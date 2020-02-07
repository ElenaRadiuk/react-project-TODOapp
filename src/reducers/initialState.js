const initialState = {
    todos: {
        todoList: [{id:1, name:'name'}],
        newTodo: {
            _id: '',
            id: '',
            name: '',
            completed: false,
            active: false,
            icon: ''
        }
    },
    VisibilityFilters: {
        filters: [],
        SHOW_ALL: true,
        SHOW_ACTIVE: true,
        SHOW_COMPLETED: true
    },
    ui: {
        isPopupHidden: false
    }
}

export default initialState;