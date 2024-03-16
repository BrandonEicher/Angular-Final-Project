import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  public discs: Product[] = [];

  private breakpointObserver = inject(BreakpointObserver);

  constructor(private productService: ProductService) {}

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { cols: 1, rows: 1, index: 0 },
          { cols: 1, rows: 1, index: 1 },
          { cols: 1, rows: 1, index: 2 },
        ];
      }
  
      return [
        { cols: 1, rows: 1, index: 0 },
        { cols: 1, rows: 1, index: 1 },
        { cols: 1, rows: 1, index: 2 },
      ];
    })
  );
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.discs = data;
    });
  }
}