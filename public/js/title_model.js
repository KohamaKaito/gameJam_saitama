// タイトルモデル


// タイトル画面からゲーム画面へ画面遷移する関数
function fromTitleSceneToGameScene(){
    clickBGM.play();
    app.stage.removeChild(titleScene);
    app.stage.addChild(gameScene);
    // mainループ スタート
    mainLoop = setInterval(main, 1000);
    //メインBGMスタート
    mainBGM.play();

}

function clickEasy(){
    setDifficulty("EASY", 4)
    fromTitleSceneToGameScene();
}

function clickNormal(){
    setDifficulty("NORMAL", 6)
    fromTitleSceneToGameScene();
}

function clickHard(){
    setDifficulty("HARD", 6)
    fromTitleSceneToGameScene();
}