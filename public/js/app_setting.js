// game_window の設定


// ゲーム画面の幅と高さを設定
let gameWindowWidth;
let gameWindowHeight;
gameWindowWidth = window.innerWidth * 0.9;
gameWindowHeight = window.innerHeight * 0.9;


// canvasの中にPIXIAppを構成
let gameWindow = document.getElementById("game_window");
let app = new PIXI.Application({
    width: gameWindowWidth,
    height: gameWindowHeight,
    backgroundColor: 0xFFFFFF,
});
gameWindow.appendChild(app.view);


// クリックBGM
let clickBGM = new Audio("music/click.mp3");
clickBGM.volume = 0.015;

//店内BGM
let mainBGM = new Audio("music/bgm.mp3");
mainBGM.volume = 0.0425;

//酒を注ぐBGM
let drinkBGM = new Audio("music/drink.mp3");
drinkBGM.volume = 0.035;

//正解BGM
let okBGM = new Audio("music/ok.mp3");
okBGM.volume = 0.025;

//不正解BGM
let missBGM = new Audio("music/miss.mp3");
missBGM.volume = 0.025;

// //時間制限迫ってますよBGM
// let timeBGM = new Audio("music/time.mp3");
// timeBGM.volume = 0.02;

// //時間制限超迫ってますよBGM
// let timeFastBGM = new Audio("music/timeFast.mp3");
// timeFastBGM.volume = 0.02;

//新しいお客さん来た時BGM
let inGuestBGM = new Audio("music/inGuest.mp3");
inGuestBGM.volume = 0.05;

//グラスリセットBGM
let drinkResetBGM = new Audio("music/drinkReset.mp3");
drinkResetBGM.volume = 0.02;

//gameOverBGM
let gameOverBGM = new Audio("music/gameOver.mp3");
gameOverBGM.volume = 0.05;