import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store'
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule,
    ReactiveFormsModule,
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
