import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {

  constructor(private productService: ProductService, private actRoute: ActivatedRoute, private router: Router) { }

  id: string = '';

  currentProduct: Product = new Product();

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = routeId;
    this.productService.getProductByID(this.id).subscribe(foundProduct => {
      this.currentProduct = foundProduct
    })
}

  updateProduct(){
    this.productService.editProductByID(this.id, this.currentProduct).subscribe(edittedProduct => {
      this.router.navigateByUrl("/products");
    })
  }
}
