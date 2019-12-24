let nextToDoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextToDoId++,
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const visibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
}