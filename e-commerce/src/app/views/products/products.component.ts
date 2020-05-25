import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppState } from '../../models/appstate.model';
import { Store } from '@ngrx/store';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products: Observable<Array<ProductModel>>;

  constructor(
    private productsService: ProductsService,
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.productsService.clear();
    this.productsService.get();
    this.products = this.store.select((store) => store.products);
  }
}
