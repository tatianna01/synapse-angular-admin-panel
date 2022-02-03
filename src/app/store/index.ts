import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { dashboardReducer } from './reducers/dashboard.reducers';
import { productsReducer } from './reducers/products.reducer';
import { dashboardNode, DashboardStateModel } from './state/dashboard.state';
import { productsNode, ProductsStateModel } from './state/products.state';

export interface State {
  [productsNode]: ProductsStateModel;
  [dashboardNode]: DashboardStateModel;
}

export const reducers: ActionReducerMap<State> = {
  [productsNode]: productsReducer,
  [dashboardNode]: dashboardReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
