import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as ProductsActions from '../store/actions/products.action';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _baseUrl: string = 'http://localhost:3300/api/products';
  constructor(private http: HttpClient, private store: Store) {}

  get() {
    this.http.get<any>(this._baseUrl).subscribe(
      (res) => this.store.dispatch(new ProductsActions.Set(res)),
      (error) => console.log(error)
    );
  }

  clear() {
    this.store.dispatch(new ProductsActions.Clear());
  }
}
