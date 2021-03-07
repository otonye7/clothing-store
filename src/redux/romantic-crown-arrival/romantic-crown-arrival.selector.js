import {createSelector} from 'reselect';

const selectCrown = state => state.romanticCrown;

export const romanticCrownSections = createSelector(
    [selectCrown],
    romanticCrown => romanticCrown.sections
)