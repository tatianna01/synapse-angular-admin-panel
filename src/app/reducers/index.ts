import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { productsNode, productsReducer, ProductsStateModel } from './products/products.reducer';

export interface State {
  [productsNode]: ProductsStateModel;
}

export const reducers: ActionReducerMap<State> = {
  [productsNode]: productsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
