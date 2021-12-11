// ゲーム画面


// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅
// gameWindowHeight・・・ゲーム画面の高さ


const gameScene = new PIXI.Container();


// 棚の配置
let shelfImage = new PIXI.Sprite(new PIXI.Texture.from("./images/shelf.png"));
shelfImage.width = gameWindowWidth * 0.4;
shelfImage.height = gameWindowHeight * 0.6;
shelfImage.x = gameWindowWidth * 0.01;
shelfImage.y = gameWindowHeight * 0.38;
gameScene.addChild(shelfImage);


// グラスの配置
let glassImage = new PIXI.Sprite(new PIXI.Texture.from("./images/glass.png"));
glassImage.width = gameWindowWidth /5;
glassImage.height = gameWindowHeight /3;
glassImage.x = shelfImage.width * 1.2;
glassImage.y = shelfImage.y + shelfImage.height * 0.4;
gameScene.addChild(glassImage);


// タイマーの配置
let timerImage = new PIXI.Sprite(new PIXI.Texture.from("./images/timer.png"));
timerImage.width = gameWindowWidth /7;
timerImage.height = timerImage.width;
timerImage.x = gameWindowWidth * 0.01;
timerImage.y = gameWindowHeight * 0.05;
gameScene.addChild(timerImage);


// バーテンダーの配置
let bartenderImage = new PIXI.Sprite(new PIXI.Texture.from("./images/macho_bartender.png"));
bartenderImage.x = gameWindowWidth * 0.7;
bartenderImage.y = gameWindowHeight * 0.5;
gameScene.addChild(bartenderImage);


// お客さんの枠の表示
let windowImage1 = new PIXI.Sprite(new PIXI.Texture.from("./images/window.png"));
windowImage1.width = gameWindowWidth * 0.25;
windowImage1.height = gameWindowHeight * 0.3;
windowImage1.x = gameWindowWidth * 0.175;
windowImage1.y = gameWindowHeight * 0.05;
gameScene.addChild(windowImage1);


let windowImage2 = new PIXI.Sprite(new PIXI.Texture.from("./images/window.png"));
windowImage2.width = gameWindowWidth * 0.25;
windowImage2.height = gameWindowHeight * 0.3;
windowImage2.x = gameWindowWidth * 0.45;
windowImage2.y = gameWindowHeight * 0.05;
gameScene.addChild(windowImage2);

let windowImage3 = new PIXI.Sprite(new PIXI.Texture.from("./images/window.png"));
windowImage3.width = gameWindowWidth * 0.25;
windowImage3.height = gameWindowHeight * 0.3;
windowImage3.x = gameWindowWidth * 0.725;
windowImage3.y = gameWindowHeight * 0.05;
gameScene.addChild(windowImage3);


//お客さんの表示
let guestImage1 = new PIXI.Sprite(new PIXI.Texture.from("./images/guest1_1.png"));
guestImage1.width = gameWindowWidth * 0.15;
guestImage1.height = gameWindowHeight * 0.27;
guestImage1.x = gameWindowWidth * 0.175;
guestImage1.y = gameWindowHeight * 0.05;
gameScene.addChild(guestImage1);

let guestImage2 = new PIXI.Sprite(new PIXI.Texture.from("./images/guest1_2.png"));
guestImage2.width = gameWindowWidth * 0.15;
guestImage2.height = gameWindowHeight * 0.27;
guestImage2.x = gameWindowWidth * 0.45;
guestImage2.y = gameWindowHeight * 0.05;
gameScene.addChild(guestImage2);

let guestImage3 = new PIXI.Sprite(new PIXI.Texture.from("./images/guest1_3.png"));
guestImage3.width = gameWindowWidth * 0.15;
guestImage3.height = gameWindowHeight * 0.27;
guestImage3.x = gameWindowWidth * 0.725;
guestImage3.y = gameWindowHeight * 0.05;
gameScene.addChild(guestImage3);


//お客さんのグラスの表示
let guestGlassImage1 = new PIXI.Sprite(new PIXI.Texture.from("./images/glass.png"));
guestGlassImage1.width = gameWindowWidth * 0.08;
guestGlassImage1.height = gameWindowHeight * 0.165;
guestGlassImage1.x = windowImage1.x + guestImage1.width;
guestGlassImage1.y = gameWindowHeight * 0.08;
gameScene.addChild(guestGlassImage1);

let guestGlassImage2 = new PIXI.Sprite(new PIXI.Texture.from("./images/glass.png"));
guestGlassImage2.width = gameWindowWidth * 0.08;
guestGlassImage2.height = gameWindowHeight * 0.165;
guestGlassImage2.x = windowImage2.x + guestImage2.width;
guestGlassImage2.y = gameWindowHeight * 0.08;
gameScene.addChild(guestGlassImage2);

let guestGlassImage3 = new PIXI.Sprite(new PIXI.Texture.from("./images/glass.png"));
guestGlassImage3.width = gameWindowWidth * 0.08;
guestGlassImage3.height = gameWindowHeight * 0.165;
guestGlassImage3.x = windowImage3.x + guestImage3.width;
guestGlassImage3.y = gameWindowHeight * 0.08;
gameScene.addChild(guestGlassImage3);


//制限時間の表示




//お酒の配置
let liqueurNameList = ["passoa", "orange", "lemon", "lime", "gin", "soda", "whiskey", "tonic", "vodka", "u-ron", "cassis", "peach"]
let liqueurImageList = []

// let liqueurNum = 0;
// for(let i=0; i<3; i++){
//     for(let j=0; j<4; j++){
//         liqueurImageList[liqueurNum] = new PIXI.Sprite(new PIXI.Texture.from("./images/" + liqueurNameList[liqueurNum] +".png"));
//         liqueurImageList[liqueurNum].interactive = true;
//         liqueurImageList[liqueurNum].buttonMode = true;
//         liqueurImageList[liqueurNum].on('pointertap', (event) => {
//             console.log(liqueurNum);
//         })
//         liqueurImageList[liqueurNum].height = shelfImage.height /3;
//         liqueurImageList[liqueurNum].width = shelfImage.width /4;
//         liqueurImageList[liqueurNum].x = shelfImage.x + (liqueurImageList[i].width * j);
//         liqueurImageList[liqueurNum].y = shelfImage.y + (liqueurImageList[i].height * i);
//         gameScene.addChild(liqueurImageList[liqueurNum]);
//         liqueurNum += 1;
//     }
// }




//突貫工事(自分のグラス)
function insertLiquer1(){
    insertLiquer(1)
}

function insertLiquer2(){
    insertLiquer(2)
}

function insertLiquer3(){
    insertLiquer(3)
}

function insertLiquer4(){
    insertLiquer(4)
}

//自分のグラスに酒を注ぐ
function insertLiquer(liquerNum){
    switch(myGrass.length){
        case 0 :
            var graphics = new PIXI.Graphics();
            graphics.beginFill(colorList[liquerNum]);
            graphics.drawRect(glassImage.x, glassImage.y + (glassImage.height / 4) * 3, 
            glassImage.width, glassImage.height / 4);
            gameScene.addChild(graphics);
            gameScene.addChild(glassImage);
            break;
        case 1 :
            var graphics = new PIXI.Graphics();
            graphics.beginFill(colorList[liquerNum]);
            graphics.drawRect(glassImage.x, glassImage.y + (glassImage.height / 4) * 2, 
            glassImage.width, glassImage.height / 4);
            gameScene.addChild(graphics);
            gameScene.addChild(glassImage);
            break;
        case 2 :
            var graphics = new PIXI.Graphics();
            graphics.beginFill(colorList[liquerNum]);
            graphics.drawRect(glassImage.x, glassImage.y + (glassImage.height / 4) * 1, 
            glassImage.width, glassImage.height / 4);
            gameScene.addChild(graphics);
            gameScene.addChild(glassImage);
            break;
        case 3 :
            var graphics = new PIXI.Graphics();
            graphics.beginFill(colorList[liquerNum]);
            graphics.drawRect(glassImage.x, glassImage.y + (glassImage.height / 4) * 0, 
            glassImage.width, glassImage.height / 4);
            gameScene.addChild(graphics);
            gameScene.addChild(glassImage);
            break;
        case 4 : 
            console.log("コップがいっぱいです")
            break;
    }
    myGrass.push(liquerNum)
}

//リキュールの配置とボタン(現在1~4まで)
let liquer1 = new PIXI.Sprite(new PIXI.Texture.from("./images/passoa.png"));
liquer1.interactive = true;
liquer1.buttonMode = true;
liquer1.width = shelfImage.width/4;
liquer1.height = shelfImage.height/3;
liquer1.x = shelfImage.x;
liquer1.y = shelfImage.y;
liquer1.on('pointertap', insertLiquer1);
gameScene.addChild(liquer1);


let liquer2 = new PIXI.Sprite(new PIXI.Texture.from("./images/orange.png"));
liquer2.interactive = true;
liquer2.buttonMode = true;
liquer2.width = shelfImage.width/4;
liquer2.height = shelfImage.height/3;
liquer2.x = shelfImage.x + shelfImage.width / 4;
liquer2.y = shelfImage.y;
liquer2.on('pointertap', insertLiquer2);
gameScene.addChild(liquer2);


let liquer3 = new PIXI.Sprite(new PIXI.Texture.from("./images/lemon.png"));
liquer3.interactive = true;
liquer3.buttonMode = true;
liquer3.width = shelfImage.width/4;
liquer3.height = shelfImage.height/3;
liquer3.x = shelfImage.x + (shelfImage.width / 4) * 2;
liquer3.y = shelfImage.y;
liquer3.on('pointertap', insertLiquer3);
gameScene.addChild(liquer3);


let liquer4 = new PIXI.Sprite(new PIXI.Texture.from("./images/lime.png"));
liquer4.interactive = true;
liquer4.buttonMode = true;
liquer4.width = shelfImage.width/4;
liquer4.height = shelfImage.height/3;
liquer4.x = shelfImage.x + (shelfImage.width / 4) * 3;
liquer4.y = shelfImage.y;
liquer4.on('pointertap', insertLiquer4);
gameScene.addChild(liquer4);




// 客ごとのオーダー
function drawOrder(orderList,guestNumber){
    switch(guestNumber){
        case 1:
            for(i=0; i<4; i++){
                var graphics = new PIXI.Graphics();
                graphics.beginFill(colorList[orderList[i]]);
                graphics.drawRect(guestGlassImage1.x, guestGlassImage1.y + (guestGlassImage1.height / 4) * i, 
                guestGlassImage1.width, guestGlassImage1.height / 4);
                gameScene.addChild(graphics);
                gameScene.addChild(guestGlassImage1);
            }
            break;
        case 2:
            for(i=0; i<4; i++){
                var graphics = new PIXI.Graphics();
                graphics.beginFill(colorList[orderList[i]]);
                graphics.drawRect(guestGlassImage2.x, guestGlassImage2.y + (guestGlassImage2.height / 4) * i, 
                guestGlassImage2.width, guestGlassImage2.height / 4);
                gameScene.addChild(graphics);
                gameScene.addChild(guestGlassImage2);
            }
            break;
        case 3:
            for(i=0; i<4; i++){
                var graphics = new PIXI.Graphics();
                graphics.beginFill(colorList[orderList[i]]);
                graphics.drawRect(guestGlassImage3.x, guestGlassImage3.y + (guestGlassImage3.height / 4) * i, 
                guestGlassImage3.width, guestGlassImage3.height / 4);
                gameScene.addChild(graphics);
                gameScene.addChild(guestGlassImage3);
            }
            break;
    }
}

//オーダー例
drawOrder(guestGrass4,1)
drawOrder(guestGrass1,2)
drawOrder(guestGrass3,3)