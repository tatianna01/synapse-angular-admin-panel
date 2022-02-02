import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsStateModel } from 'src/app/reducers/products/products.reducer';
import { selectProducts } from 'src/app/reducers/products/products.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  filteredString: string = '';

  public products$: Observable<Product[]> = this.store$.pipe(select(selectProducts))

  constructor(private store$: Store<ProductsStateModel>) { }

  ngOnInit(): void {

  }

}
