import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Basket, Product, ProductInBasketService } from '../core/api';
import { DecreaseProductsCount } from '../core/store/basket';

import removeIcon from '@iconify/icons-mdi/rubbish-bin-empty';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  basket: Basket;

  removeIcon = removeIcon;

  constructor(
    private productInBasketService: ProductInBasketService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.productInBasketService.list().pipe(untilDestroyed(this)).subscribe(basket => {
      this.basket = basket[0];
      this.products = [...this.basket.products];
    });
  }

  removeProductFromBasket(product: Product) {
    product.loading = true;

    this.basket.products.splice(this.basket.products.indexOf(product), 1);
    this.basket.productsCount = this.basket.productsCount - 1;

    this.productInBasketService.update(this.basket.id, this.basket).pipe(untilDestroyed(this)).subscribe(basket => {
      product.loading = false;
      this.products.splice(this.products.indexOf(product), 1);
      this.store.dispatch(new DecreaseProductsCount);
    });
  }

  ngOnDestroy(): void { }
}
