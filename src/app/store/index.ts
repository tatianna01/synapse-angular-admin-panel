import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authReducer } from './reducers/auth.reducer';
import { dashboardReducer } from './reducers/dashboard.reducers';
import { productsReducer } from './reducers/products.reducer';
import { AuthStateModel } from './state/auth.state';
import { DashboardStateModel } from './state/dashboard.state';
import { ProductsStateModel } from './state/products.state';

export interface State {
  products: ProductsStateModel;
  dashboard: DashboardStateModel;
  auth: AuthStateModel
}

export const reducers: ActionReducerMap<State> = {
  products: productsReducer,
  dashboard: dashboardReducer,
  auth: authReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
