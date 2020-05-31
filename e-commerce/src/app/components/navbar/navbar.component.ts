import { Component } from '@angular/core';
import { IAppState } from '../../models/appstate.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public totalCartQuantity: Observable<number>;

  constructor(private store: Store<IAppState>) {
    this.totalCartQuantity = store.select((state) => state.cart.totalQuantity);
  }
}
