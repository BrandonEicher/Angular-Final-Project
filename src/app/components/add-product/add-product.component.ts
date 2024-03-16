import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  
  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) { }

  createProduct(): void {
    this.productService.createNewProduct(this.product)
    .subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}