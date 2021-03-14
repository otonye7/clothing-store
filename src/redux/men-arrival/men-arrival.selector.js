import {createSelector} from 'reselect';

const selectMen = state => state.mens;

export const menSections = createSelector(
    [selectMen],
    mens => mens.sections
)
