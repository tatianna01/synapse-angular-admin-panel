import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/models/product.model";
import { productsNode, ProductsStateModel } from "../state/products.state";

export const selectProductsFeature = createFeatureSelector<ProductsStateModel>(productsNode);

export const selectProducts = createSelector(
    selectProductsFeature,
    (state: ProductsStateModel): Product[] => state.products
)