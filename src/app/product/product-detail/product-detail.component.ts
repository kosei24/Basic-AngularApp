import { Component, OnInit } from '@angular/core';
//動的にURL遷移するためのモジュール
import { ActivatedRoute } from "@angular/router";
import { products } from '../../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  //productを宣言しhtml内での変数として利用可能にする
  product:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //productはproducts.ts内のJSONをIdで指定し、初期値として渡せるようにする
      this.product = products[+params.get("productId")!]
    })
  }

}
