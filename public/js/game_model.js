// ゲームモデル


// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅
// gameWindowHeight・・・ゲーム画面の高さ


/*対応表
    1 = "passoa", 2 = "orange", 3 = "lemon", 4 = "lime", 5 = "gin", 6 = "soda", 
    7 = "whiskey", 8 = "tonic", 9 = "vodka", 10 = "u-ron", 11 = "cassis", 12 = "peach"
*/

//ドリンクリスト
let easyDrinkList = [
    [5,8,8,8], //ジントニック
    [5,5,5,4], //ギムレット
    [9,4,8,8], //モスコミュール
    [11,2,2,2], //カシスオレンジ
    [11,10,10,10], //カシスウーロン
    [11,6,6,6], //カシスソーダ
    [1,2,2,2], //パッソアオレンジ
    [1,6,6,6], //パッソアソーダ
    [7,6,6,6], //ハイボール
    [9,2,2,2], //スクリュードライバー
    [12,10,10,10], //ピーチウーロン
    [12,2,2,2], //ファジーネーブル
    [7,3,6,6], //レモンハイボール
    [7,4,6,6], //ライムハイボール
    [9,9,4,4], //カミカゼ
    [5,3,6,6], //ジンフィズ
    [5,5,12,2], //パラダイス
    [3,7,7,7], //ペニシリン 
    [9,8,8,8], //ウオッカトニック
    [1,8,8,8], //パッソアトニック
]

let hardDrinkList = []

let originalDrinkList = []

//色リスト
let colorList = [
    0x000000, //黒
    0xFF0000, //赤
    0xFFA500, //オレンジ
    0xFFFF00, //黄色
    0x008000, //緑
    0xFFFFFF, //白
    0x00FFFF, //水色
    0x808000, //黄土色
    0x00FF00, //黄緑
    0x808080, //灰色
    0x8B4513, //茶色
    0x800080, //紫
    0xFFC0CB, //ピンク
]


// ???
function clickLiqueur(e){
    console.log(e.data.name)
}


//オーダー抽選
function createOrder(){
    let randamInt = Math.floor(Math.random() * easyDrinkList.length)
    return easyDrinkList[randamInt]
}

// 正解判定例
let myGrass = []

let guestGrass1 = [2,2,1,1]
let guestGrass2 = [1,2,1,2]
let guestGrass3 = [2,1,2,1]
let guestGrass4 = [1,2,3,4]

// 正解判定
function judge(guestGrass){
    myGrass.sort() //sort
    guestGrass.sort() //sort
    if(JSON.stringify(myGrass) == JSON.stringify(guestGrass)){
        return true
    }else{
        return false
    }
}
