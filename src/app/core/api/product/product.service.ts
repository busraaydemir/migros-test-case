import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + '/api/Product');
  }

  get(id: string): Observable<Product> {
    return this.http.get<Product>(environment.apiUrl + `/api/Product/:${id}`);
  }
}
