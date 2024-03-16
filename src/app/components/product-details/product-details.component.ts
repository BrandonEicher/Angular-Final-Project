import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  currentProduct: Product = new Product();
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.productService.getProductByID(routeId).subscribe(foundProduct => {
        console.log(foundProduct);
        this.currentProduct = foundProduct;
    });
  }

  deleteProduct(id: string): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProductById(id).subscribe(() => {
        this.router.navigateByUrl("/products");        
      });
    }
  }
}
