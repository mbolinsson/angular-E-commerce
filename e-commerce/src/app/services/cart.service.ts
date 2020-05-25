import { Injectable } from '@angular/core';
import { IAppState } from '../models/appstate.model';
import { Store } from '@ngrx/store';
import * as CartAction from '../store/actions/cart.action';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private store: Store<IAppState>) {}

  add(product, quantity) {
    this.store.dispatch(new CartAction.Add(product));
  }

  remove(id) {
    this.store.dispatch(new CartAction.Remove(id));
  }
}
