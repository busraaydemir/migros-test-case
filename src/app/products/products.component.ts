import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Basket, Product, ProductService, ProductInBasketService } from '../core/api';
import { IncreaseProductsCount } from '../core/store/basket';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { combineLatest } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  basket: Basket;

  constructor(
    private productService: ProductService,
    private productsInBasketService: ProductInBasketService,
    private store: Store
  ) { }

  ngOnInit(): void {
    combineLatest([this.productService.list(), this.productsInBasketService.list()])
      .pipe(untilDestroyed(this))
      .subscribe(([products, baskets]) => {
        this.products = [...products];
        this.basket = baskets[0];
      });
  }

  addBasket(product: Product) {
    product.loading = true;

    this.basket.products.push({ ...product, loading: false });
    this.basket.productsCount = this.basket.productsCount + 1;

    this.productsInBasketService.update(this.basket.id, this.basket).subscribe(response => {
      product.loading = false;
      this.store.dispatch(new IncreaseProductsCount());
    });
  }

  ngOnDestroy(): void { }

}
