import { Component, OnInit } from '@angular/core';

import { IAppState } from '../../../models/appstate.model';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  public cart;
  public totalAmount: Observable<number>;

  constructor(private store: Store<IAppState>) {
    this.totalAmount = this.store.select((store) => store.cart.totalAmount);
  }

  ngOnInit(): void {
    this.cart = this.store.select((store) => store.cart.items);
  }
}
