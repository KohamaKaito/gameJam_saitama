// ゲーム画面


// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅
// gameWindowHeight・・・ゲーム画面の高さ


const gameScene = new PIXI.Container();


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

