// ゲームモデル


// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅
// gameWindowHeight・・・ゲーム画面の高さ


/*
対応表
01 = "passoa"
02 = "orange"
03 = "lemon"
04 = "lime"
05 = "gin"
06 = "soda"
07 = "whiskey"
08 = "tonic"
09 = "vodka"
10 = "u-ron"
11 = "cassis"
12 = "peach"
*/


// 自分のグラスの情報
let myGlass = [];

// お客さん1のグラスの情報
let guestGlass1 = [];

// お客さん2のグラスの情報
let guestGlass2 = [];

// お客さん3のグラスの情報
let guestGlass3 = [];

// ドリンクリスト
let easyDrinkList = [
    [8,8,8,5],      // ジントニック
    [4,5,5,5],      // ギムレット
    [4,8,8,9],      // モスコミュール
    [11,2,2,2],     // カシスオレンジ
    [11,10,10,10],  // カシスウーロン
    [11,6,6,6],     // カシスソーダ
    [1,2,2,2],      // パッソアオレンジ
    [1,6,6,6],      // パッソアソーダ
    [7,6,6,6],      // ハイボール
    [2,2,2,9],      // スクリュードライバー
    [12,10,10,10],  // ピーチウーロン
    [12,2,2,2],     // ファジーネーブル
    [7,3,6,6],      // レモンハイボール
    [7,4,6,6],      // ライムハイボール
    [4,4,9,9],      // カミカゼ
    [3,6,6,5],      // ジンフィズ
    [12,2,5,5],     // パラダイス
    [3,7,7,7],      // ペニシリン
    [8,8,8,9],      // ウオッカトニック
    [1,8,8,8],      // パッソアトニック
];

// let hardDrinkList = [];
// let originalDrinkList = [];

// 色リスト
let colorList = [
    0x000000, // 黒
    0xFF0000, // 赤
    0xFFA500, // オレンジ
    0xFFFF00, // 黄色
    0x008000, // 緑
    0xFFFFFF, // 白
    0x00FFFF, // 水色
    0x808000, // 黄土色
    0x00FF00, // 黄緑
    0x808080, // 灰色
    0x8B4513, // 茶色
    0x800080, // 紫
    0xFFC0CB, // ピンク
];

// 全体の制限時間
let timer = 30;

// お客さん1の制限時間
let guestTimeLimit1 = 9;
let guestTimer1 = guestTimeLimit1;

// お客さん2の制限時間
let guestTimeLimit2 = 9;
let guestTimer2 = guestTimeLimit2;

// お客さん3の制限時間
let guestTimeLimit3 = 9;
let guestTimer3 = guestTimeLimit3;

// ランダムでオーダーを決定する関数
function createOrder(){
    let randomInt = Math.floor(Math.random() * easyDrinkList.length);
    return easyDrinkList[randomInt];
}


// 正解判定
function judge(guestGlass){
    myGlass.sort();
    guestGlass.sort();
    if(JSON.stringify(myGlass) == JSON.stringify(guestGlass)){
        return true;
    }else{
        return false;
    }
}

//　グラスをリセット
function resetMyGlass(){
    myGrass = [];
    resetMyGlassView()
}



// 選んだお酒を入れる関数
function selectedLiqueur1(){
    drawSelectedLiqueur(1);
    if(myGlass.length < 4){
        myGlass.push(1);
    }
}

function selectedLiqueur2(){
    drawSelectedLiqueur(2);
    if(myGlass.length < 4){
        myGlass.push(2);
    }
}

function selectedLiqueur3(){
    drawSelectedLiqueur(3);
    if(myGlass.length < 4){
        myGlass.push(3);
    }
}

function selectedLiqueur4(){
    drawSelectedLiqueur(4);
    if(myGlass.length < 4){
        myGlass.push(4);
    }
}

function selectedLiqueur5(){
    drawSelectedLiqueur(5);
    if(myGlass.length < 4){
        myGlass.push(5);
    }
}

function selectedLiqueur6(){
    drawSelectedLiqueur(6);
    if(myGlass.length < 4){
        myGlass.push(6);
    }
}

function selectedLiqueur7(){
    drawSelectedLiqueur(7);
    if(myGlass.length < 4){
        myGlass.push(7);
    }
}

function selectedLiqueur8(){
    drawSelectedLiqueur(8);
    if(myGlass.length < 4){
        myGlass.push(8);
    }
}

function selectedLiqueur9(){
    drawSelectedLiqueur(9);
    if(myGlass.length < 4){
        myGlass.push(9);
    }
}

function selectedLiqueur10(){
    drawSelectedLiqueur(10);
    if(myGlass.length < 4){
        myGlass.push(10);
    }
}

function selectedLiqueur11(){
    drawSelectedLiqueur(11);
    if(myGlass.length < 4){
        myGlass.push(11);
    }
}

function selectedLiqueur12(){
    drawSelectedLiqueur(12);
    if(myGlass.length < 4){
        myGlass.push(12);
    }
}


//　グラスをリセット
function resetMyGlass(){
    myGlass = [];
    resetMyGlassView()
}

function resetGuestGlass1(){
    guestGlass1 = [];
    resetGuestGlassView1()
}

function resetGuestGlass2(){
    guestGlass2 = [];
    resetGuestGlassView2()
}

function resetGuestGlass3(){
    guestGlass3 = [];
    resetGuestGlassView3()
}

//酒提供
function serveDrink1(){
    if(judge(guestGlass1) == true){
        /* ここにスコア */  
        alert("1いいね");      
    }
    else{
        /* 減点する? */
    }
    resetMyGlass()
    resetGuestGlass1()
}

function serveDrink2(){
    if(judge(guestGlass2) == true){
        /* ここにスコア */
        alert("2いいね");
    }
    else{
        /* 減点する? */
    }
    resetMyGlass()
    resetGuestGlass2()
}

function serveDrink3(){
    if(judge(guestGlass3) == true){
        /* ここにスコア */ 
        alert("3いいね");       
    }
    else{
        /* 減点する? */
    }
    resetMyGlass()
    resetGuestGlass3()
}

