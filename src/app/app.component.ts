import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title: string = '';
  productList: Product[] = [];

  constructor(private myProductService: ProductService) {}

  ngOnInit(): void {
    this.title = this.myProductService.title;
    this.myProductService.getAllProducts()
    .subscribe(response => this.productList = response);
  }
}