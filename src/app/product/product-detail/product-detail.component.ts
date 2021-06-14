import { Component, OnInit } from '@angular/core';
//動的にURL遷移するためのモジュール
import { ActivatedRoute } from "@angular/router";
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  //productを宣言しhtml内での変数として利用可能にする
  product:any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productObservable = this.productService.getProductById(params.get("productId")!)
      productObservable.subscribe(
        (data) => {
          this.product = data
        },
        (err) => {

        }
      )
    })
  }

}
