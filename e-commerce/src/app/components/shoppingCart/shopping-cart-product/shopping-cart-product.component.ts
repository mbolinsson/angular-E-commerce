import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from '../../../models/cart.model';
import { CartService } from '../../../services/cart.service';
import { IAppState } from '../../../models/appstate.model';
import { Store } from '@ngrx/store';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-shopping-cart-product',
  templateUrl: './shopping-cart-product.component.html',
  styleUrls: ['./shopping-cart-product.component.css'],
})
export class ShoppingCartProductComponent implements OnInit {
  public product: ProductModel;

  @Input() cart: CartModel;
  constructor(
    private store: Store<IAppState>,
    private CartService: CartService
  ) {}

  ngOnInit(): void {
    console.log(this.cart);
    this.store
      .select((store) => store.product)
      .subscribe((res) => (this.product = res));
  }

  Remove(id) {
    this.CartService.remove(id);
  }

  AddOne(product, quantity = 1) {
    this.CartService.add(product, quantity);
  }

  RemoveOne(product, quantity = -1) {
    this.CartService.removeOneItem(product, quantity);
  }
}
