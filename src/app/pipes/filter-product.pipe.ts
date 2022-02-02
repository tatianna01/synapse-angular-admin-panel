import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if(value.length === 0 || filteredString === '') {
      return value;
    }
    return value.filter((product: Product) => 
      product.title === filteredString ||
      product.title.toLocaleLowerCase().includes(filteredString.toLocaleLowerCase()
    ))
  }

}
