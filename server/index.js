// expressフレームワーク
const express = require("express")
//MongoDB接続用のモジュール(https://www.npmjs.com/package/mongoose)
const mongoose = require('mongoose')
// パスワードをgitに載せないようにする
const config = require("./config/dev")
// Fake data
const FakeDb = require("./fake-db")
// エンドポイントのルーター
const productRoutes = require("./routes/products")


//mongooseを用いてMongoDBに接続
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(
  () => {
    //DBに繋いだ後の処理を定義 - インスタンス生成
    const fakeDb = new FakeDb()
    // DB保存
    fakeDb.initDb()

  }
)


// express インスタンス
const app = express()


//エンドポイント呼び出し
app.use("/api/v1/products", productRoutes)


//クラウドにPORTを繋がる場合はprocessを作動し、ローカルならば3001番ポートに繋ぐ
const PORT = process.env.PORT || "3001"


//nodeサーバー起動
app.listen(PORT, function(){
    console.log("I am running")
})


