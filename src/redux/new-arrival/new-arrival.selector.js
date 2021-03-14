import {createSelector} from 'reselect';

const selectNew = state => state.news;

export const newSections = createSelector(
    [selectNew],
    news => news.sections
)

