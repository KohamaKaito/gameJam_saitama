// タイトルモデル


// タイトル画面からゲーム画面へ画面遷移する関数
function fromTitleSceneToGameScene(){
    app.stage.removeChild(titleScene);
    app.stage.addChild(gameScene);
}