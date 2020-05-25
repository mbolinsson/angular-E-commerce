import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './views/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './views/products/products.component';
import { StoreModule } from '@ngrx/store';
import { CartReducer } from './store/reducers/cart.reducer';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProdcutsReducer } from '../app/store/reducers/products.reducer';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { ProdcutReducer } from './store/reducers/product.reducer';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductViewComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        cart: CartReducer,
        products: ProdcutsReducer,
        product: ProdcutReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
