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
let playButton = new PIXI.Text("ゲームをプレイする", {fill: 0xFFFFFF,  align :'center'});
playButton.interactive = true;
playButton.buttonMode = true;
playButton.style.fontSize = gameWindowWidth/20;
playButton.x = gameWindowWidth/2 - playButton.width/2;
playButton.y = gameWindowHeight/1.45;
playButton.on('pointertap', fromTitleSceneToGameScene);
titleScene.addChild(playButton);


app.stage.addChild(titleScene);
