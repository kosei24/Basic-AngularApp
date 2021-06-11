import { Component, OnInit } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListComponent implements OnInit {

  products:any;
  
  //*ngFor：プロダクト数
  // product_amounts: any = [1,2,3,4]

  constructor() { }

  ngOnInit(): void {
    this.products = products
  }

}