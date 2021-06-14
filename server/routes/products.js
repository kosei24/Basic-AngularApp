// expressフレームワーク
const express = require("express")
const router = express.Router()
//モデルをインポート
const Product = require("../model/product")

//エンドポイントのルーター処理
//商品一覧ページの情報
router.get("", function(req,res){

    //商品データをデータベースから探し出し、Jsonで全て出力する
    Product.find({}, function(err,foundProducts){
        return res.json(foundProducts)      
    })
    
})

//商品詳細ページの個別商品情報
router.get("/:productId", function(req,res){
    const productId = req.params.productId
    //IDが同じ商品データをデータベースから探し出し、Jsonで全て出力する
    Product.findById(productId, function(err,foundProducts){

        if(err){
           return res.status(422).send({errors:[{title:"Product error", detail: "Product not found"}]})
        }
        
        return res.json(foundProducts)      
    })
    
})

module.exports = router
