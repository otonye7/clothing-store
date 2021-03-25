import {createSelector} from 'reselect';

const selectWomenCollections = state => state.womenCollection;

export const WomenCollections = createSelector(
    [selectWomenCollections],
    womenCollection => womenCollection.sections
)