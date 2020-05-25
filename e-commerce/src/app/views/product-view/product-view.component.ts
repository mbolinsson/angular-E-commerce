import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../../models/appstate.model';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  public product: ProductModel;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private store: Store<IAppState>,
    private CartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.clear();
    this.productService.getById(this.router.snapshot.params.id);
    this.store
      .select((store) => store.product)
      .subscribe((res) => (this.product = res));
  }

  AddToCart(product, quantity = 1) {
    this.CartService.add(product, quantity);
  }
}
