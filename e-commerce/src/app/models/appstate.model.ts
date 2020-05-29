import { ProductModel } from './product.model';
import { CartStateModel } from './cartstate.model';

export interface IAppState {
  readonly products: Array<ProductModel>;
  readonly product: ProductModel;
  readonly cart: CartStateModel;
}
