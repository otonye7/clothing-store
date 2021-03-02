import {createSelector} from 'reselect';

const selectMen = state => state.men;

export const menSection = createSelector(
    [selectMen],
    men => men.sections
)