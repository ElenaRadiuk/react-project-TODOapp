import initialState from './initialState';

export default function uiReducer(state = initialState.ui, action) {
    switch (action.type) {
        // case 'SET_VISIBILITY_FILTER':
        //     return action.visibilityFilters

        case "HANDLE_CLOSE_POPUP": {
            return {
                ...state,
                isPopupHidden: !state.isPopupHidden
            }
        }

        case "HANDLE_CLOSE_POPUP_SUB": {
            return {
                ...state,
                isPopupSubHidden: !state.isPopupSubHidden
            }
        }

        default: return state    
    }
}


// export default function uiReducer(state = initialState.ui, action) {
//     switch(action.type) {
//         case "HANDLE_CLOSE_POPUP": {
//             return {
//                 ...state, isPopupHidden: !state.isPopupHidden
//             }
//         }
//         default: return state
//     }
// }
