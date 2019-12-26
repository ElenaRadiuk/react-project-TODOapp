import initialState from './initialState';

const visibilityFilters = (state = initialState.visibilityFilters, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.visibilityFilters

        default: return state    
    }
}

export default visibilityFilters;