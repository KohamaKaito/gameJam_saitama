// ゲーム画面


// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅
// gameWindowHeight・・・ゲーム画面の高さ


const gameScene = new PIXI.Container();


//セレクトボタン1の配置
let selectButtonImage1 = new PIXI.Sprite(new PIXI.Texture.from("images/selectButton.png"));
selectButtonImage1.interactive = true;
selectButtonImage1.buttonMode = true;
selectButtonImage1.width = boardImage.width/7;
selectButtonImage1.height = boardImage.width/7;
selectButtonImage1.x = boardImage.x;
selectButtonImage1.y = boardImage.y;
selectButtonImage1.on('pointertap', insertCoin1);
gameScene.addChild(selectButtonImage1);

