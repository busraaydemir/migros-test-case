import { BasketEffects, basketReducer, BasketState } from './basket';

export * from './basket';

export const appReducer = {
    basket: basketReducer,
}

export const appEffects = [
    BasketEffects,
]