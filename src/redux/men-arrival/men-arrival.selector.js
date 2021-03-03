import {createSelector} from 'reselect';

const selectMen = state => state.mens;

export const menSections = createSelector(
    [selectMen],
    mens => mens.sections
)
export const menSectionsFilter = createSelector(
    [selectMen],
    mens => mens.sections.find((men) => men.id <= 1)
)