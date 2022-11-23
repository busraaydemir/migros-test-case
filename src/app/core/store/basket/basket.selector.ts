import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BasketState } from "./basket.reducer";


export const selectBasketState = createFeatureSelector('basket');

export const getProductionCount = createSelector(
    selectBasketState,
    (state: BasketState) => state.productsCount
);