// スコア表示画面


// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅
// gameWindowHeight・・・ゲーム画面の高さ


const scoreScene = new PIXI.Container();

let finalScoreText = new PIXI.Text("Score", {fill: 0x000000,  align :'center'});
finalScoreText.style.fontSize = gameWindowWidth * 0.05;
finalScoreText.x = gameWindowWidth/2 - finalScoreText.width/2;
finalScoreText.y = gameWindowHeight * 0.2;
scoreScene.addChild(finalScoreText);


let finalScore = new PIXI.Text(0, {fill: 0x000000,  align :'center'});
finalScore.style.fontSize = gameWindowWidth * 0.1;
finalScore.width = gameWindowWidth * 0.3;
finalScore.height = gameWindowHeight * 0.2;
finalScore.x = gameWindowWidth/2 - finalScore.width/2;
finalScore.y = gameWindowHeight * 0.4;
function drawFinalScore(){
    finalScore.text = score;
    scoreScene.addChild(finalScore);
}


let returnTitleText = new PIXI.Text("タイトル画面へ戻る", {fill: 0x000000,  align :'center'});
returnTitleText.style.fontSize = gameWindowWidth * 0.05;
returnTitleText.interactive = true;
returnTitleText.buttonMode = true;
returnTitleText.x = gameWindowWidth/2 - returnTitleText.width/2;
returnTitleText.y = gameWindowHeight * 0.7;
returnTitleText.on('pointertap', fromScoreSceneToTitleScene);
scoreScene.addChild(returnTitleText);
