import {createSelector} from 'reselect';

const selectNewBalance = state => state.newBalance

export const newBalanceSections = createSelector(
    [selectNewBalance],
    newBalance => newBalance.sections
)