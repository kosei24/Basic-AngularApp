import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListComponent implements OnInit {

  products:any;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => {
        this.products = data
      },

      (err) => {console.log("エラー：データ取れてへん")},

    )

  }

}



