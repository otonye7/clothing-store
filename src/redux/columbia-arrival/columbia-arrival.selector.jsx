import {createSelector} from 'reselect';

const selectColumbia = state => state.columbia;

export const columbiaSections = createSelector(
    [selectColumbia],
    columbia => columbia.sections
)