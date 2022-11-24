import { Action } from '@ngrx/store';
import { Basket } from '../../api';

export enum BasketActionTypes {
    LOAD_PRODUCTS_IN_BASKET = '[Basket] LOAD_PRODUCTS_IN_BASKET',
    GET_PRODUCTS_IN_BASKET = '[Basket] GET_PRODUCTS_IN_BASKET',
    GET_PRODUCTS_IN_BASKET_SUCCESS = '[Basket] GET_PRODUCTS_IN_BASKET_SUCCESS',
    GET_PRODUCTS_IN_BASKET_ERROR = '[Basket] GET_PRODUCTS_IN_BASKET_ERROR',
    INCREASE_PRODUCTS_COUNT = '[Basket] INCREASE_PRODUCTS_COUNT',
    DECREASE_PRODUCTS_COUNT = '[Basket] DECREASE_PRODUCTS_COUNT',
    UPDATE_PRODUCTS_COUNT = '[Basket] UPDATE_PRODUCTS_COUNT',
}

export class LoadBasket implements Action {
    readonly type = BasketActionTypes.LOAD_PRODUCTS_IN_BASKET;
}

export class GetBasket implements Action {
    readonly type = BasketActionTypes.GET_PRODUCTS_IN_BASKET;
    constructor() { }
}

export class GetBasketSuccess implements Action {
    readonly type = BasketActionTypes.GET_PRODUCTS_IN_BASKET_SUCCESS;
    constructor(public payload: Basket) { }
}

export class GetBasketError implements Action {
    readonly type = BasketActionTypes.GET_PRODUCTS_IN_BASKET_ERROR;
    constructor(public payload: null) { }
}

export class IncreaseProductsCount implements Action {
    readonly type = BasketActionTypes.INCREASE_PRODUCTS_COUNT;
}

export class DecreaseProductsCount implements Action {
    readonly type = BasketActionTypes.DECREASE_PRODUCTS_COUNT;
}

export class UpdateProductsCount implements Action {
    readonly type = BasketActionTypes.UPDATE_PRODUCTS_COUNT;
    constructor(public count: number) { }
}

export type BasketActions =
    LoadBasket |
    GetBasket |
    GetBasketSuccess |
    GetBasketError |
    IncreaseProductsCount |
    DecreaseProductsCount |
    UpdateProductsCount;
