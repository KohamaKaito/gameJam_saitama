// タイトル画面

// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅
// gameWindowHeight・・・ゲーム画面の高さ


const titleScene = new PIXI.Container();


// 背景画像の追加
let backgroundImage = new PIXI.Sprite(new PIXI.Texture.from("images/title.png"));
backgroundImage.width = gameWindowWidth;
backgroundImage.height = gameWindowHeight;
backgroundImage.x = 0;
backgroundImage.y = 0;
titleScene.addChild(backgroundImage);


// タイトルの配置
let titleText = new PIXI.Text("The Bartender", {fill: 0xFFFFFF,  align :'center'});
titleText.style.fontSize = gameWindowWidth/10;
titleText.x = gameWindowWidth/2 - titleText.width/2;
titleText.y = gameWindowHeight * 0.2;
titleScene.addChild(titleText);


// ゲームをプレイボタンの配置
let easyButton = new PIXI.Text("イージー", {fill: 0xFFFFFF,  align :'center'});
easyButton.interactive = true;
easyButton.buttonMode = true;
easyButton.style.fontSize = gameWindowWidth/20;
easyButton.x = gameWindowWidth/2 - easyButton.width * 2;
easyButton.y = gameWindowHeight/1.45;
easyButton.on('pointertap', clickEasy);
titleScene.addChild(easyButton);

let normalButton = new PIXI.Text("ノーマル", {fill: 0xFFFFFF,  align :'center'});
normalButton.interactive = true;
normalButton.buttonMode = true;
normalButton.style.fontSize = gameWindowWidth/20;
normalButton.x = gameWindowWidth/2 - normalButton.width/2;
normalButton.y = gameWindowHeight/1.45;
normalButton.on('pointertap', clickNormal);
titleScene.addChild(normalButton);

let hardButton = new PIXI.Text("ハード", {fill: 0xFFFFFF,  align :'center'});
hardButton.interactive = true;
hardButton.buttonMode = true;
hardButton.style.fontSize = gameWindowWidth/20;
hardButton.x = gameWindowWidth/2 + hardButton.width * 1.5;
hardButton.y = gameWindowHeight/1.45;
hardButton.on('pointertap', clickHard);
titleScene.addChild(hardButton);

app.stage.addChild(titleScene);
