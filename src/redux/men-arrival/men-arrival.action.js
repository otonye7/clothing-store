import MenActionTypes from './men-arrival.types';

export const filterColors = section => ({
    type: MenActionTypes.FILTER_COLOR,
    payload: section
})