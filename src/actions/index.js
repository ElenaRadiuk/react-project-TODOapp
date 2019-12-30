let nextToDoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextToDoId++,
    text
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



export const closePopup = (e) => {
    return {
        type: 'HANDLE_CLOSE_POPUP'
    }
}