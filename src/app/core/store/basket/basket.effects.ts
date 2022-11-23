import { of } from 'rxjs';
import { catchError, switchMap, mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
    BasketActionTypes, GetBasketSuccess, GetBasketError, GetBasket
} from './basket.actions';
import { ProductInBasketService } from '../../api';

@Injectable()
export class BasketEffects {
    constructor(
        private basketInProductsService: ProductInBasketService,
        private actions$: Actions
    ) { }

    getProductsInBasket$ = createEffect(() => this.actions$.pipe(
        ofType(BasketActionTypes.GET_PRODUCTS_IN_BASKET),
        mergeMap((request: GetBasket) => this.basketInProductsService.list()),
        switchMap(response => of(new GetBasketSuccess(response[0]))),
        catchError((error) => of(new GetBasketError(error)))
    ));
}
