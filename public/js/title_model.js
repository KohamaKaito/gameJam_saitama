// タイトルモデル


// タイトル画面からゲーム画面へ画面遷移する関数
function fromTitleSceneToGameScene(){
    clickBGM.play();
    app.stage.removeChild(titleScene);
    app.stage.addChild(gameScene);
    // mainループ スタート
    setInterval(main, 1000);
    //メインBGMスタート
    mainBGM.play()

}