import {createSelector} from 'reselect';

const selectSorel = state => state.sorel

export const sorelSections = createSelector(
    [selectSorel],
    sorel => sorel.sections
)