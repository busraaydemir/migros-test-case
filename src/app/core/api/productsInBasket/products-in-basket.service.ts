import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../product/product.model';
import { Basket } from './basket.model';

@Injectable({
    providedIn: 'root'
})
export class ProductInBasketService {

    constructor(private http: HttpClient) { }

    list(): Observable<Basket[]> {
        return this.http.get<Basket[]>(environment.apiUrl + 'api/products/productsInBasket');
    }

    update(id: string, basket: Basket): Observable<Basket> {
        const url = `${environment.apiUrl}/api/products/productsInBasket/${id}`;
        return this.http.put<Basket>(url, basket);
    }
}