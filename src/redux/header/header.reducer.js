import HeaderActionTypes from './header.types';

const INITIAL_STATE = {
    hidden: true
}

const headerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HeaderActionTypes.TOGGLE_NAV_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

            default:
                return state;
    }
}

export default headerReducer;