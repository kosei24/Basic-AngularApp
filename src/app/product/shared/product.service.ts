import { Injectable } from "@angular/core";
import { products } from "src/app/products";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


//Serviceとして利用する場合は、下記のように記載
@Injectable()
export class ProductService {

    //HTTP規約に準拠したHTTPClientを表示
    constructor(private http: HttpClient) { }

    //商品一覧画面にて利用（商品データを全て取得)
    getProducts(): Observable<any>{
        // return products
        return this.http.get("/api/v1/products/")
    }

    //商品詳細ページにて利用(IDで個別商品データを取得)
    getProductById(productId: string): Observable<any> {
        return this.http.get('/api/v1/products/' + productId)
      }

}