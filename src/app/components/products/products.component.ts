import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts()
    .subscribe(products => this.productList = products);
  }

  sortProductsByPrice(): void {
    this.productService.getAllProducts('_sort=price').subscribe(products => {
      this.productList = products;
    });
  }

  sortProductsByName(): void {
    this.productService.getAllProducts('_sort=productName').subscribe(products => {
      this.productList = products;
    });
  }  

  navigateToProductDetail(productId: string | undefined): void {
    if (productId) {
        this.router.navigate(['/products', productId]);
    } 
  }

  deleteProduct(id: string): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProductById(id).subscribe(() => {
        this.productList = this.productList.filter(product => product.id !== id);

      });
    }
  }
}