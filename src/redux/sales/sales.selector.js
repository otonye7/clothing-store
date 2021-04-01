import {createSelector} from 'reselect';

const selectSales = state => state.sales;

export const SalesSections = createSelector(
    [selectSales],
    sales=> sales.sections
)