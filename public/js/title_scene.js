// タイトル画面

// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅
// gameWindowHeight・・・ゲーム画面の高さ


const titleScene = new PIXI.Container();


// タイトルの配置
let titleText = new PIXI.Text("タイトル");
titleText.style.fontSize = gameWindowWidth/10;
titleText.x = gameWindowWidth/2 - titleText.width/2;
titleText.y = gameWindowHeight * 0.2;
titleScene.addChild(titleText);


// ゲームをプレイボタンの配置
let playButton = new PIXI.Text("ゲームをプレイ");
playButton.interactive = true;
playButton.buttonMode = true;
playButton.style.fontSize = gameWindowWidth/30;
playButton.x = gameWindowWidth/2 - playButton.width/2;
playButton.y = gameWindowHeight/1.35;
playButton.on('pointertap', fromTitleSceneToGameScene);
titleScene.addChild(playButton);


app.stage.addChild(titleScene);
