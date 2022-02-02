import { Component, OnInit } from '@angular/core';

export interface Product {
  id: number;
  image: string;
  title: string;
  content: string;
  updated: string;
  downloads: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: Product[];

  constructor() {
    this.products =[
      {
        id: 1,
        image: 'assets/app1.jpg',
        title: 'Dropbox',
        content: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
        updated: 'Updated 2hr ago',
        downloads: 594,
      },
      {
        id: 2,
        image: 'assets/app2.jpg',
        title: 'Medium Corporation',
        content: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
        updated: 'Updated 2hr ago',
        downloads: 594,
      },
      {
        id: 3,
        image: 'assets/app3.jpg',
        title: 'Slack',
        content: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
        updated: 'Updated 2hr ago',
        downloads: 594,
      },
      {
        id: 4,
        image: 'assets/app4.jpg',
        title: 'Lyft',
        content: 'Lyft is an on-demand transportation company based in San Francisco, California.',
        updated: 'Updated 2hr ago',
        downloads: 594,
      },
      {
        id: 5,
        image: 'assets/app5.jpg',
        title: 'GitHub',
        content: 'GitHub is a web-based hosting service for version control of code using Git.',
        updated: 'Updated 2hr ago',
        downloads: 594,
      },
      {
        id: 6,
        image: 'assets/app6.jpg',
        title: 'Squarespace',
        content: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
        updated: 'Updated 2hr ago',
        downloads: 594,
      },
    ]
   }

  ngOnInit(): void {

  }

}
