import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../models/appstate.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public totalQuantity;
  public cart;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store
      .select((store) => store.cart)
      .subscribe((res) => (this.cart = res));
    console.log(this.cart);

    this.cart.map((item) => {
      this.totalQuantity + item.quantity;
    });
  }
}
