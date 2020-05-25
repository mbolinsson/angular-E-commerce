import { ProductModel } from './product.model';

export interface IAppState {
  readonly products: Array<ProductModel>;
  readonly product: ProductModel;
  readonly cart: Array<ProductModel>;
}
