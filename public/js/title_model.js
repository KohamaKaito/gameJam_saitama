// タイトルモデル


// タイトル画面からゲーム画面へ画面遷移する関数
function fromTitleSceneToGameScene(){
    clickBGM.play();
    app.stage.removeChild(titleScene);
    app.stage.addChild(gameScene);
    // タイマーのスタート
    setInterval(drawTimer, 1000);
    setInterval(drawGuestTimer1, 1000);
    setInterval(drawGuestTimer2, 1000);
    setInterval(drawGuestTimer3, 1000);
}