import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as ProductAction from '../store/actions/product.action';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _baseUrl: string = 'http://localhost:3300/api/products/';

  constructor(private http: HttpClient, private store: Store) {}

  getById(id) {
    console.log(id);
    this.http.get<any>(this._baseUrl + id).subscribe(
      (res) => this.store.dispatch(new ProductAction.Set(res)),
      (error) => console.log(error)
    );
  }

  clear() {
    this.store.dispatch(new ProductAction.Clear());
  }
}
