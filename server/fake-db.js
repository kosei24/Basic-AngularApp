//モデルをインポート
const Product = require("./model/product")

//ダミーデータをDBに入れる
class FakeDb {
    constructor(){
        this.products = [
            {
                coverImage:"./assets/img/phone-cover.jpg",
                name: "Phone XL",
                price: 799,
                description: "A large phone with one of the best screens",
                heading1:"ヘッド1",
                heading2:"ヘッド2",
                heading3:"ヘッド3",
                headingtext1:"あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ",
                headingtext2:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
                headingtext3:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
            },
        
            {
                coverImage:"./assets/img/phone-cover.jpg",
                name: "Phone Mini",
                price: 699,
                description: "A great phone with one of the best camera",
                heading1:"ヘッド1",
                heading2:"ヘッド2",
                heading3:"ヘッド3",
                headingtext1:"あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ",
                headingtext2:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
                headingtext3:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
            },
        
            {
                coverImage:"./assets/img/phone-cover.jpg",
                name: "Phone standard",
                price: 299,
                description: "Normal",
                heading1:"ヘッド1",
                heading2:"ヘッド2",
                heading3:"ヘッド3",
                headingtext1:"あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ",
                headingtext2:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
                headingtext3:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
            },
        
            {
                coverImage:"./assets/img/phone-cover.jpg",
                name: "Phone Special",
                price: 999,
                description: "Special",
                heading1:"ヘッド1",
                heading2:"ヘッド2",
                heading3:"ヘッド3",
                headingtext1:"あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ あいうえおかきくけこさしすせそ",
                headingtext2:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
                headingtext3:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
            }
        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb(){
        //DBのテーブルレコード削除(カッコを空白{}で渡すことで実質削除)
        await Product.deleteMany({})
    }

    //this.productsの中のデータをpushProductsToD関数B内のアロー関数に1つずつ(forEach)渡す
    //new productでインスタンス生成
    pushProductsToDb(){
        this.products.forEach(
            (product)=> {
                const newProduct = new Product(product)
                //DBにデータ保存
                newProduct.save()
            }
        )
    }

    //上記関数を実行する関数
    seeDb(){
        this.pushProductsToDb()
    }
}

module.exports = FakeDb