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


//グラスの表示
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

let liqueurNum = 0;
for(let i=0; i<3; i++){
    for(let j=0; j<4; j++){
        liqueurImageList[liqueurNum] = new PIXI.Sprite(new PIXI.Texture.from("./images/" + liqueurNameList[liqueurNum] +".png"));
        liqueurImageList[liqueurNum].interactive = true;
        liqueurImageList[liqueurNum].buttonMode = true;
        liqueurImageList[liqueurNum].on('pointertap', (event) => {
            console.log(liqueurNum);
        })
        liqueurImageList[liqueurNum].height = shelfImage.height /3;
        liqueurImageList[liqueurNum].width = shelfImage.width /4;
        liqueurImageList[liqueurNum].x = shelfImage.x + (liqueurImageList[i].width * j);
        liqueurImageList[liqueurNum].y = shelfImage.y + (liqueurImageList[i].height * i);
        gameScene.addChild(liqueurImageList[liqueurNum]);
        liqueurNum += 1;
    }
}


// 色のついた長方形を描く
/*
var graphics = new PIXI.Graphics();
graphics.beginFill(0xFFFF00);
graphics.drawRect(glassImage.x, glassImage.y, glassImage.width, 100);
gameScene.addChild(graphics);
gameScene.addChild(glassImage);
*/