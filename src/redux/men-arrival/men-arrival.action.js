import MenActionTypes from './men-arrival.types';

export const filterColors = items => ({
    type: MenActionTypes.FILTER_COLOR,
    payload: items
})