// expressフレームワーク
const express = require("express")
//MongoDB接続用のモジュール(https://www.npmjs.com/package/mongoose)
const mongoose = require('mongoose')
// パスワードをgitに載せないようにする
const config = require("./config/index")
// Fake data
const SampleDb = require('./sample-db')
// エンドポイントのルーター
const productRoutes = require("./routes/products")
// ディレクトリ
const path = require("path")


//mongooseを用いてMongoDBに接続
mongoose.connect(config.DB_URI, {
useNewUrlParser: true,
useUnifiedTopology: true
}).then(
() => {
  if(process.env.NODE_ENV !== 'production') {
    const sampleDb = new SampleDb()
    // sampleDb.initDb()
  }
}
)

const app = express()

//エンドポイント呼び出し
app.use('/api/v1/products', productRoutes)

//(本番環境対応)上記エンドポイント意外のエンドポイントのリクエストが来たときは、index.htmlのレスポンスを返す
if(process.env.NODE_ENV === 'production') {
const appPath = path.join( __dirname, '..', 'dist', 'Basic-AngularApp')
app.use(express.static(appPath))
app.get("*", function(req, res) {
  res.sendFile(path.resolve(appPath, 'index.html'))
})
}

//クラウドにPORTを繋がる場合はprocessを作動し、ローカルならば3001番ポートに繋ぐ
const PORT = process.env.PORT || '3001'


//nodeサーバー起動
app.listen(PORT, function() {
console.log('I am running!')
})
