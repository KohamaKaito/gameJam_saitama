// ゲーム画面


// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅

// gameWindowHeight・・・ゲーム画面の高さ


const gameScene = new PIXI.Container();

/*
//セレクトボタン1の配置
let selectButtonImage1 = new PIXI.Sprite(new PIXI.Texture.from("images/selectButton.png"));
selectButtonImage1.interactive = true;
selectButtonImage1.buttonMode = true;
selectButtonImage1.width = 100;
selectButtonImage1.height = 100;
selectButtonImage1.x = 100;
selectButtonImage1.y = 100;
selectButtonImage1.on('pointertap', select);
gameScene.addChild(selectButtonImage1);
*/

//棚の配置
let shelfImage = new PIXI.Sprite(new PIXI.Texture.from("./images/shelf.png"));
shelfImage.width = gameWindowWidth * 0.4;
shelfImage.height = gameWindowHeight * 0.6;
shelfImage.x = gameWindowWidth * 0.01;
shelfImage.y = gameWindowHeight * 0.38;
gameScene.addChild(shelfImage);

//グラスの配置
let glassImage = new PIXI.Sprite(new PIXI.Texture.from("./images/glass.png"));
glassImage.width = gameWindowWidth /5;
glassImage.height = gameWindowHeight /3;
glassImage.x = shelfImage.width * 1.2;
glassImage.y = shelfImage.y + shelfImage.height * 0.4;
gameScene.addChild(glassImage);

//タイマーの配置
let timerImage = new PIXI.Sprite(new PIXI.Texture.from("./images/timer.png"));
timerImage.width = gameWindowWidth /7;
timerImage.height = timerImage.width;
timerImage.x = gameWindowWidth * 0.01;
timerImage.y = gameWindowHeight * 0.01;
gameScene.addChild(timerImage);

//バーテンダーの配置
let bartenderImage = new PIXI.Sprite(new PIXI.Texture.from("./images/macho_bartender.png"));
//bartenderImage.width = gameWindowWidth /7;
//bartenderImage.height = timerImage.width;
bartenderImage.x = gameWindowWidth * 0.7;
bartenderImage.y = gameWindowHeight * 0.5;
gameScene.addChild(bartenderImage);
