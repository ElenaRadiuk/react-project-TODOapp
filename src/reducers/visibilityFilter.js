import initialState from './initialState';

const visibilityFilter = (state = initialState.visibilityFilter, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.visibilityFilter

        default: return state    
    }
}

export default visibilityFilter;