// タイトル画面からゲーム画面へ画面遷移する関数
function fromScoreSceneToTitleScene(){
    resetMyGlass();
    score = 0;
    timer = timeLimit;
    guestTimer1 = guestTimeLimit1;
    guestTimer2 = guestTimeLimit2;
    guestTimer3 = guestTimeLimit3;
    app.stage.removeChild(scoreScene);
    app.stage.addChild(titleScene);
}