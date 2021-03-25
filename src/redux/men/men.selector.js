import {createSelector} from 'reselect';

const selectMenCollections = state => state.menCollection;

export const menCollections = createSelector(
    [selectMenCollections],
    menCollection => menCollection.sections
)