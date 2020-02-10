const initialState = {
    todos: {
        todoList: [{id:17, name:'name'}],
        newTodo: {
            _id: '',
            id: '',
            name: '',
            completed: false,
            active: false,
            icon: ''
        }, 
        subTodoList: [{
            parent_id: '1',
            id: 'sub1',
            name: 'some text',
            completed: false
        }]
    },
    VisibilityFilters: {
        filters: [],
        SHOW_ALL: true,
        SHOW_ACTIVE: true,
        SHOW_COMPLETED: true
    },
    ui: {
        isPopupHidden: false,
        isPopupSubHidden: false
    }
}

export default initialState;