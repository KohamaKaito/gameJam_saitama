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
