import HeaderActionTypes from './header.types';

const INITIAL_STATE = {
    hidden: true,
    menhidden: true,
    womenhidden: true,
    kidhidden: true,
    lifestylehidden: true,
    saleshidden: true,
    brandshidden: true,
    instoreonlyhidden: true
}

const headerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HeaderActionTypes.TOGGLE_ARRIVAL_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden 
            }
        case HeaderActionTypes.TOGGLE_MEN_HIDDEN:
            return {
                ...state,
                menhidden: !state.menhidden
            }
        case HeaderActionTypes.TOGGLE_WOMEN_HIDDEN:
            return {
                ...state,
                womenhidden: !state.womenhidden
            }
        case HeaderActionTypes.TOGGLE_KID_HIDDEN:
            return {
                ...state,
                kidhidden: !state.kidhidden
            }
        case HeaderActionTypes.TOGGLE_LIFESTYLE_HIDDEN:
            return {
                ...state,
                lifestylehidden: !state.lifestylehidden
            }

        case HeaderActionTypes.TOGGLE_BRAND_HIDDEN:
            return {
                ...state,
                brandshidden: !state.brandshidden
            }
            default:
                return state;
    }
}

export default headerReducer;