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

let difficulty = "EASY";
let max_num = 4;

function setDifficulty(diff, max){
    difficulty = diff;
    max_num = max;
}

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



let hardDrinkList = [
    [8,8,8,8,5,5],      // ジントニック
    [4,4,5,5,5,5],      // ギムレット
    [4,8,8,8,9,9],      // モスコミュール
    [11,11,2,2,2,2],     // カシスオレンジ
    [11,10,10,10],  // カシスウーロン
    [11,11,6,6,6,6],     // カシスソーダ
    [1,1,2,2,2,2],      // パッソアオレンジ
    [1,1,6,6,6,6],      // パッソアソーダ
    [7,7,6,6,6,6],      // ハイボール
    [2,2,2,2,9,9],      // スクリュードライバー
    [12,12,10,10,10,10],  // ピーチウーロン
    [12,12,2,2,2,2],     // ファジーネーブル
    [7,7,3,6,6,6],      // レモンハイボール
    [7,7,4,6,6,6],      // ライムハイボール
    [4,4,4,9,9,9],      // カミカゼ
    [3,6,6,6,5,5],      // ジンフィズ
    [12,2,2,5,5,5],     // パラダイス
    [3,3,7,7,7,7],      // ペニシリン
    [8,8,8,8,9,9],      // ウオッカトニック
    [1,1,8,8,8,8],      // パッソアトニック
    [12,11,2,2,3,3],     //プレミアムサマー
    [11,4,4,10,10,10],   //トロピカルウーロン
    [5,9,9,7,7,7],       //ダイナマイト
    [11,2,2,1,1,1],      //バイオハザード
    [12,12,3,8,8,8],    //フレっシュ
    [1,1,1,1,1,7],     //パッソアクレイジー
    [11,11,5,5,6,8],   //レディー
    [9,5,7,12,1,11],   //カルストンライトオ
    [6,8,8,8,3,3],     //ダイエットソーダ
];

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

// ランダムでオーダーを決定する関数
function createOrder(){
    let result;
    switch(difficulty){
        case "EASY":
            let randomIntEasy = Math.floor(Math.random() * easyDrinkList.length);
            result = easyDrinkList[randomIntEasy];
            break;
        case "NORMAL":
            let randomIntHard = Math.floor(Math.random() * hardDrinkList.length);
            console.log()
            result = hardDrinkList[randomIntHard];
            break;
        case "HARD":
            let lunaticList = [];
            for(let i=0; i<max_num; i++){
                let num = Math.floor(Math.random() * (12))+1;
                lunaticList.push(num);
            }
            result = lunaticList;
            break;
    }
    return result;
}

guestGlass1 = createOrder();
guestGlass2 = createOrder();
guestGlass3 = createOrder();


// 全体の制限時間
let timeLimit = 10;
let timer = timeLimit;

// スコア
let score = 0;

// お客さん1の制限時間
let guestTimeLimit1 = setTimeLimit(guestGlass1);
let guestTimer1 = guestTimeLimit1;

// お客さん2の制限時間
let guestTimeLimit2 = setTimeLimit(guestGlass2);
let guestTimer2 = guestTimeLimit2;

// お客さん3の制限時間
let guestTimeLimit3 = setTimeLimit(guestGlass3);
let guestTimer3 = guestTimeLimit3;

function setTimeLimit(guestGlass){
    let unique = Array.from(new Set(guestGlass))
    switch(unique.length){
        case 6:
            return 45;
            break;
        case 5:
            return 40;
            break;
        case 4:
            return 30;
            break;
        case 3:
            return 25;
            break;
        case 2:
            return 20;
            break;
        case 1:
            return 10;
            break;
    }
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
    if(myGlass.length < max_num){
        myGlass.push(1);
    }
}

function selectedLiqueur2(){
    drawSelectedLiqueur(2);
    if(myGlass.length < max_num){
        myGlass.push(2);
    }
}

function selectedLiqueur3(){
    drawSelectedLiqueur(3);
    if(myGlass.length < max_num){
        myGlass.push(3);
    }
}

function selectedLiqueur4(){
    drawSelectedLiqueur(4);
    if(myGlass.length < max_num){
        myGlass.push(4);
    }
}

function selectedLiqueur5(){
    drawSelectedLiqueur(5);
    if(myGlass.length < max_num){
        myGlass.push(5);
    }
}

function selectedLiqueur6(){
    drawSelectedLiqueur(6);
    if(myGlass.length < max_num){
        myGlass.push(6);
    }
}

function selectedLiqueur7(){
    drawSelectedLiqueur(7);
    if(myGlass.length < max_num){
        myGlass.push(7);
    }
}

function selectedLiqueur8(){
    drawSelectedLiqueur(8);
    if(myGlass.length < max_num){
        myGlass.push(8);
    }
}

function selectedLiqueur9(){
    drawSelectedLiqueur(9);
    if(myGlass.length < max_num){
        myGlass.push(9);
    }
}

function selectedLiqueur10(){
    drawSelectedLiqueur(10);
    if(myGlass.length < max_num){
        myGlass.push(10);
    }
}

function selectedLiqueur11(){
    drawSelectedLiqueur(11);
    if(myGlass.length < max_num){
        myGlass.push(11);
    }
}

function selectedLiqueur12(){
    drawSelectedLiqueur(12);
    if(myGlass.length < max_num){
        myGlass.push(12);
    }
}


//　グラスをリセット
function resetMyGlass(){
    drinkResetBGM.play()
    myGlass = [];
    resetMyGlassView();
}

function resetGuestGlass1(){
    guestGlass1 = [];
    resetGuestGlassView1();
}

function resetGuestGlass2(){
    guestGlass2 = [];
    resetGuestGlassView2();
}

function resetGuestGlass3(){
    guestGlass3 = [];
    resetGuestGlassView3();
}

//酒提供
function serveDrink1(){
    if(judge(guestGlass1) == true){
        updateScore(1);
        okBGM.play();      
    }
    else{
        score -= 10;
        missBGM.play();
    }
    resetMyGlass();
    resetGuestGlass1();
    updateGuest1();
}

function serveDrink2(){
    if(judge(guestGlass2) == true){
        updateScore(2);
        okBGM.play();
    }
    else{
        score -= 10;
        missBGM.play();
    }
    resetMyGlass();
    resetGuestGlass2();
    updateGuest2();
}

function serveDrink3(){
    if(judge(guestGlass3) == true){
        updateScore(3);
        okBGM.play();      
    }
    else{
        score -= 10;
        missBGM.play();
    }
    resetMyGlass();
    resetGuestGlass3();
    updateGuest3();
}


// スコアの更新
function updateScore(guestNum){
    switch (guestNum){
        case 1:
            if(guestTimer1>=0 && guestTimer1<10){
                score += 10;
            }else if(guestTimer1>=10 && guestTimer1<20){
                score += 20;
            }else if(guestTimer1>=20 && guestTimer1<30){
                score += 30;
            }
            break
        case 2:
            if(guestTimer2>=0 && guestTimer2<10){
                score += 10;
            }else if(guestTimer2>=10 && guestTimer2<20){
                score += 20;
            }else if(guestTimer2>=20 && guestTimer2<30){
                score += 30;
            }
            break
        case 3:
            if(guestTimer3>=0 && guestTimer3<10){
                score += 10;
            }else if(guestTimer3>=10 && guestTimer3<20){
                score += 20;
            }else if(guestTimer3>=20 && guestTimer3<30){
                score += 30;
            }
            break
    }
}


function decrementTimer(){
    timer -= 1;
    if(guestTimer1 == 0){
        score -= 10;
        guestTimer1 = guestTimeLimit1;
    }else{
        guestTimer1 -= 1;
    }

    if(guestTimer2 == 0){
        score -= 10;
        guestTimer2 = guestTimeLimit2;
    }else{
        guestTimer2 -= 1;
    }

    if(guestTimer3 == 0){
        score -= 10;
        guestTimer3 = guestTimeLimit3;
    }else{
        guestTimer3 -= 1;
    }
}


function updateGuest1(){
    guestGlass1 = createOrder();
    guestTimeLimit1 = setTimeLimit(guestGlass1);
    guestTimer1 = guestTimeLimit1;
    drawOrder(guestGlass1, 1);
}

function updateGuest2(){
    guestGlass2 = createOrder();
    guestTimeLimit2 = setTimeLimit(guestGlass2);
    guestTimer2 = guestTimeLimit2;
    drawOrder(guestGlass2, 2);
}
function updateGuest3(){
    guestGlass3 = createOrder();
    guestTimeLimit3 = setTimeLimit(guestGlass3);
    guestTimer3 = guestTimeLimit3;
    drawOrder(guestGlass3, 3);
}

function initializeGlasses(){
    resetGuestGlass1();
    updateGuest1();
    resetGuestGlass2();
    updateGuest2();
    resetGuestGlass3();
    updateGuest3();
}


// ゲーム画面からスコア表示画面へ画面遷移する関数
function fromGameSceneToScoreScene(){
    drawFinalScore();
    app.stage.removeChild(gameScene);
    app.stage.addChild(scoreScene);
}