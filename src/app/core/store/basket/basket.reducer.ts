import { Product } from '../../api';
import { BasketActions, BasketActionTypes } from './basket.actions';

export interface BasketState {
    id: string;
    products: Product[];
    productsCount: number;
    isLoading: boolean;
}

export const BasketState: BasketState = {
    id: '',
    products: [],
    productsCount: 0,
    isLoading: false,
} as BasketState;

export function basketReducer(state = BasketState, action: BasketActions): BasketState {
    switch (action.type) {
        case BasketActionTypes.GET_PRODUCTS_IN_BASKET:
            return {
                ...state,
                isLoading: true
            };
        case BasketActionTypes.GET_PRODUCTS_IN_BASKET_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                id: action.payload.id,
                isLoading: false,
            };
        case BasketActionTypes.GET_PRODUCTS_IN_BASKET_ERROR:
            return {
                ...state,
                isLoading: false
            };
        case BasketActionTypes.INCREASE_PRODUCTS_COUNT:
            return {
                ...state,
                productsCount: state.productsCount + 1
            };
        case BasketActionTypes.DECREASE_PRODUCTS_COUNT:
            return {
                ...state,
                productsCount: state.productsCount - 1
            };

        case BasketActionTypes.UPDATE_PRODUCTS_COUNT:
            return {
                ...state,
                productsCount: action.count
            };
        default:
            return state;
    }
}


export const notificationCount = (state: BasketState) => state.productsCount;
export const notificationIsLoading = (state: BasketState) => state.isLoading;
export const products = (state: BasketState) => state.products;
