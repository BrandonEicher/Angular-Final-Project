import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public discs: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.discs = data;
    });
  }
}
