let nextToDoId = 1;
let nextSubToDoId = 1;

export const addTodo = name => ({
    type: 'ADD_TODO',
    id: nextToDoId++,
    name
})

export const addSubTodo = (name) => ({
    type: 'ADD_SUB_TODO',
    id: nextSubToDoId++,
    // parent_id,
    name
})

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO'
    }
}

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const activeTodo = id => ({
    type: 'ACTIVE_TODO',
    id
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
}

export const handleInputChange = (name, value) => {
    return {
        type: 'HANDLE_INPUT_CHANGE',
        payload: {[name]: value}
    }
}

export const handleInputChangeSub = (name, value) => {
    return {
        type: 'HANDLE_INPUT_CHANGE_SUB',
        payload: {
            [name]: value
        }
    }
}



export const closePopup = (e) => {
    return {
        type: 'HANDLE_CLOSE_POPUP'
    }
}

export const closePopupSubTask = (e) => {
    return {
        type: 'HANDLE_CLOSE_POPUP_SUB'
    }
}