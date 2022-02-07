import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { selectProducts } from 'src/app/store/selectors/products.selectors';
import { ProductsStateModel } from 'src/app/store/state/products.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  filteredProducts!: Product[];

  products!: Product [];

  products$: Observable<Product[]> = this.store$.pipe(select(selectProducts))

  constructor(private store$: Store<ProductsStateModel>) { }

  ngOnInit(): void {
    this.products$.subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    })
  }

  onChange(value: string): void {
    if (value === '') {
      this.filteredProducts = this.products;
    } else {
        this.filteredProducts = this.products.filter((product: Product) => 
        product.title === value ||
        product.title.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()))
    }
  }
  
}
