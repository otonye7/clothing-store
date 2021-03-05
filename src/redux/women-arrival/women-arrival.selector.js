import {createSelector} from 'reselect';

const selectWomen = state => state.womens

export const womenSections = createSelector(
    [selectWomen],
    womens => womens.sections
)