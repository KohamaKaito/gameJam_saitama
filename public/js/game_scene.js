// ゲーム画面


// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅
// gameWindowHeight・・・ゲーム画面の高さ


const gameScene = new PIXI.Container();

// 棚の配置
let shelfImage = new PIXI.Sprite(new PIXI.Texture.from("./images/shelf.png"));
shelfImage.width = gameWindowWidth * 0.4;
shelfImage.height = gameWindowHeight * 0.6;
shelfImage.x = gameWindowWidth * 0.01;
shelfImage.y = gameWindowHeight * 0.38;
gameScene.addChild(shelfImage);


// グラスの配置
let glassImage = new PIXI.Sprite(new PIXI.Texture.from("./images/glass.png"));
glassImage.width = gameWindowWidth /5;
glassImage.height = gameWindowHeight /3;
glassImage.x = shelfImage.width * 1.2;
glassImage.y = shelfImage.y + shelfImage.height * 0.2;
gameScene.addChild(glassImage);


// タイマーの配置
let timerImage = new PIXI.Sprite(new PIXI.Texture.from("./images/timer.png"));
timerImage.width = gameWindowWidth /7;
timerImage.height = timerImage.width;
timerImage.x = gameWindowWidth * 0.01;
timerImage.y = gameWindowHeight * 0.05;
gameScene.addChild(timerImage);


// バーテンダーの配置
let bartenderImage = new PIXI.Sprite(new PIXI.Texture.from("./images/macho_bartender.png"));
bartenderImage.width = gameWindowWidth * 0.3;
bartenderImage.height = gameWindowHeight * 0.4;
bartenderImage.x = gameWindowWidth * 0.7;
bartenderImage.y = gameWindowHeight * 0.6;
gameScene.addChild(bartenderImage);

//リセットボタンの配置
let resetButton = new PIXI.Sprite(new PIXI.Texture.from("./images/RESET.png"));
resetButton.interactive = true;
resetButton.buttonMode = true;
resetButton.width = glassImage.width
resetButton.x = glassImage.x;
resetButton.y = glassImage.y + glassImage.height * 1.05;
resetButton.on('pointertap', resetMyGlass);
gameScene.addChild(resetButton);


// お客さんの枠の配置
let windowImage1 = new PIXI.Sprite(new PIXI.Texture.from("./images/window.png"));
windowImage1.interactive = true;
windowImage1.buttonMode = true;
windowImage1.width = gameWindowWidth * 0.25;
windowImage1.height = gameWindowHeight * 0.3;
windowImage1.x = gameWindowWidth * 0.175;
windowImage1.y = gameWindowHeight * 0.05;
windowImage1.on('pointertap', serveDrink1);
gameScene.addChild(windowImage1);

let windowImage2 = new PIXI.Sprite(new PIXI.Texture.from("./images/window.png"));
windowImage2.interactive = true;
windowImage2.buttonMode = true;
windowImage2.width = gameWindowWidth * 0.25;
windowImage2.height = gameWindowHeight * 0.3;
windowImage2.x = gameWindowWidth * 0.45;
windowImage2.y = gameWindowHeight * 0.05;
windowImage2.on('pointertap', serveDrink2);
gameScene.addChild(windowImage2);

let windowImage3 = new PIXI.Sprite(new PIXI.Texture.from("./images/window.png"));
windowImage3.interactive = true;
windowImage3.buttonMode = true;
windowImage3.width = gameWindowWidth * 0.25;
windowImage3.height = gameWindowHeight * 0.3;
windowImage3.x = gameWindowWidth * 0.725;
windowImage3.y = gameWindowHeight * 0.05;
windowImage3.on('pointertap', serveDrink3);
gameScene.addChild(windowImage3);


// お客さんの配置
let guestImage1 = new PIXI.Sprite(new PIXI.Texture.from("./images/guest_man.png"));
guestImage1.width = gameWindowWidth * 0.15;
guestImage1.height = gameWindowHeight * 0.27;
guestImage1.x = gameWindowWidth * 0.175;
guestImage1.y = gameWindowHeight * 0.05;
gameScene.addChild(guestImage1);

let guestImage2 = new PIXI.Sprite(new PIXI.Texture.from("./images/guest_woman.png"));
guestImage2.width = guestImage1.width*0.9;
guestImage2.height = guestImage1.height*0.9;
guestImage2.x = gameWindowWidth * 0.45;
guestImage2.y = gameWindowHeight * 0.07;
gameScene.addChild(guestImage2);

let guestImage3 = new PIXI.Sprite(new PIXI.Texture.from("./images/guest_oldman.png"));
guestImage3.width = guestImage1.width*0.8;
guestImage3.height = guestImage1.height*0.9;
guestImage3.x = gameWindowWidth * 0.728;
guestImage3.y = gameWindowHeight * 0.07;
gameScene.addChild(guestImage3);


// お客さんのグラスの配置
let guestGlassImage1 = new PIXI.Sprite(new PIXI.Texture.from("./images/glass.png"));
guestGlassImage1.width = gameWindowWidth * 0.08;
guestGlassImage1.height = gameWindowHeight * 0.165;
guestGlassImage1.x = windowImage1.x + guestImage1.width;
guestGlassImage1.y = gameWindowHeight * 0.08;
gameScene.addChild(guestGlassImage1);

let guestGlassImage2 = new PIXI.Sprite(new PIXI.Texture.from("./images/glass.png"));
guestGlassImage2.width = gameWindowWidth * 0.08;
guestGlassImage2.height = gameWindowHeight * 0.165;
guestGlassImage2.x = windowImage2.x + guestImage2.width;
guestGlassImage2.y = gameWindowHeight * 0.08;
gameScene.addChild(guestGlassImage2);

let guestGlassImage3 = new PIXI.Sprite(new PIXI.Texture.from("./images/glass.png"));
guestGlassImage3.width = gameWindowWidth * 0.08;
guestGlassImage3.height = gameWindowHeight * 0.165;
guestGlassImage3.x = windowImage3.x + guestImage3.width*1.1;
guestGlassImage3.y = gameWindowHeight * 0.08;
gameScene.addChild(guestGlassImage3);




// リキュールの配置
let liqueur1 = new PIXI.Sprite(new PIXI.Texture.from("./images/passoa.png"));
liqueur1.interactive = true;
liqueur1.buttonMode = true;
liqueur1.width = shelfImage.width/4;
liqueur1.height = shelfImage.height/3;
liqueur1.x = shelfImage.x + (shelfImage.width/4) * 0;
liqueur1.y = shelfImage.y + (shelfImage.height/3) * 0;
liqueur1.on('pointertap', selectedLiqueur1);
gameScene.addChild(liqueur1);

let liqueur2 = new PIXI.Sprite(new PIXI.Texture.from("./images/orange.png"));
liqueur2.interactive = true;
liqueur2.buttonMode = true;
liqueur2.width = shelfImage.width/4;
liqueur2.height = shelfImage.height/3;
liqueur2.x = shelfImage.x + (shelfImage.width/4) * 1;
liqueur2.y = shelfImage.y + (shelfImage.height/3) * 0;
liqueur2.on('pointertap', selectedLiqueur2);
gameScene.addChild(liqueur2);

let liqueur3 = new PIXI.Sprite(new PIXI.Texture.from("./images/lemon.png"));
liqueur3.interactive = true;
liqueur3.buttonMode = true;
liqueur3.width = shelfImage.width/4;
liqueur3.height = shelfImage.height/3;
liqueur3.x = shelfImage.x + (shelfImage.width/4) * 2;
liqueur3.y = shelfImage.y + (shelfImage.height/3) * 0;
liqueur3.on('pointertap', selectedLiqueur3);
gameScene.addChild(liqueur3);

let liqueur4 = new PIXI.Sprite(new PIXI.Texture.from("./images/lime.png"));
liqueur4.interactive = true;
liqueur4.buttonMode = true;
liqueur4.width = shelfImage.width/4;
liqueur4.height = shelfImage.height/3;
liqueur4.x = shelfImage.x + (shelfImage.width/4) * 3;
liqueur4.y = shelfImage.y + (shelfImage.height/3) * 0;
liqueur4.on('pointertap', selectedLiqueur4);
gameScene.addChild(liqueur4);

let liqueur5 = new PIXI.Sprite(new PIXI.Texture.from("./images/gin.png"));
liqueur5.interactive = true;
liqueur5.buttonMode = true;
liqueur5.width = shelfImage.width/4;
liqueur5.height = shelfImage.height/3;
liqueur5.x = shelfImage.x + (shelfImage.width/4) * 0;
liqueur5.y = shelfImage.y + (shelfImage.height/3) * 1;
liqueur5.on('pointertap', selectedLiqueur5);
gameScene.addChild(liqueur5);

let liqueur6 = new PIXI.Sprite(new PIXI.Texture.from("./images/soda.png"));
liqueur6.interactive = true;
liqueur6.buttonMode = true;
liqueur6.width = shelfImage.width/4;
liqueur6.height = shelfImage.height/3;
liqueur6.x = shelfImage.x + (shelfImage.width/4) * 1;
liqueur6.y = shelfImage.y + (shelfImage.height/3) * 1;
liqueur6.on('pointertap', selectedLiqueur6);
gameScene.addChild(liqueur6);

let liqueur7 = new PIXI.Sprite(new PIXI.Texture.from("./images/whiskey.png"));
liqueur7.interactive = true;
liqueur7.buttonMode = true;
liqueur7.width = shelfImage.width/4;
liqueur7.height = shelfImage.height/3;
liqueur7.x = shelfImage.x + (shelfImage.width/4) * 2;
liqueur7.y = shelfImage.y + (shelfImage.height/3) * 1;
liqueur7.on('pointertap', selectedLiqueur7);
gameScene.addChild(liqueur7);

let liqueur8 = new PIXI.Sprite(new PIXI.Texture.from("./images/tonic.png"));
liqueur8.interactive = true;
liqueur8.buttonMode = true;
liqueur8.width = shelfImage.width/4;
liqueur8.height = shelfImage.height/3;
liqueur8.x = shelfImage.x + (shelfImage.width/4) * 3;
liqueur8.y = shelfImage.y + (shelfImage.height/3) * 1;
liqueur8.on('pointertap', selectedLiqueur8);
gameScene.addChild(liqueur8);

let liqueur9 = new PIXI.Sprite(new PIXI.Texture.from("./images/vodka.png"));
liqueur9.interactive = true;
liqueur9.buttonMode = true;
liqueur9.width = shelfImage.width/4;
liqueur9.height = shelfImage.height/3;
liqueur9.x = shelfImage.x + (shelfImage.width/4) * 0;
liqueur9.y = shelfImage.y + (shelfImage.height/3) * 2;
liqueur9.on('pointertap', selectedLiqueur9);
gameScene.addChild(liqueur9);

let liqueur10 = new PIXI.Sprite(new PIXI.Texture.from("./images/u-ron.png"));
liqueur10.interactive = true;
liqueur10.buttonMode = true;
liqueur10.width = shelfImage.width/4;
liqueur10.height = shelfImage.height/3;
liqueur10.x = shelfImage.x + (shelfImage.width/4) * 1;
liqueur10.y = shelfImage.y + (shelfImage.height/3) * 2;
liqueur10.on('pointertap', selectedLiqueur10);
gameScene.addChild(liqueur10);

let liqueur11 = new PIXI.Sprite(new PIXI.Texture.from("./images/cassis.png"));
liqueur11.interactive = true;
liqueur11.buttonMode = true;
liqueur11.width = shelfImage.width/4;
liqueur11.height = shelfImage.height/3;
liqueur11.x = shelfImage.x + (shelfImage.width/4) * 2;
liqueur11.y = shelfImage.y + (shelfImage.height/3) * 2;
liqueur11.on('pointertap', selectedLiqueur11);
gameScene.addChild(liqueur11);

let liqueur12 = new PIXI.Sprite(new PIXI.Texture.from("./images/peach.png"));
liqueur12.interactive = true;
liqueur12.buttonMode = true;
liqueur12.width = shelfImage.width/4;
liqueur12.height = shelfImage.height/3;
liqueur12.x = shelfImage.x + (shelfImage.width/4) * 3;
liqueur12.y = shelfImage.y + (shelfImage.height/3) * 2;
liqueur12.on('pointertap', selectedLiqueur12);
gameScene.addChild(liqueur12);


// 入れたお酒を描画する関数
let myGlassView = [];
function drawSelectedLiqueur(liqueurNum){
    if(myGlass.length == max_num){
        missBGM.play()
        alert("コップがいっぱいです!!!")
        return;
    } else {
        drinkBGM.play();
        drinkBGM.currentTime = 0;
        myGlassView[myGlass.length] = new PIXI.Graphics();
        myGlassView[myGlass.length].beginFill(colorList[liqueurNum]);
        myGlassView[myGlass.length].drawRect(glassImage.x, glassImage.y + (glassImage.height / max_num) * (max_num - 1 - myGlass.length),
            glassImage.width, glassImage.height / max_num);
        gameScene.addChild(myGlassView[myGlass.length]);
        gameScene.addChild(glassImage);
    }
}


let guestGlassView1 = [];
let guestGlassView2 = [];
let guestGlassView3 = [];

// 客のオーダーを描画する関数
function drawOrder(orderList,guestNumber){
    switch(guestNumber){
        case 1:
            for(i=0; i<max_num; i++){
                guestGlassView1[i] = new PIXI.Graphics();
                guestGlassView1[i].beginFill(colorList[orderList[i]]);
                guestGlassView1[i].drawRect(guestGlassImage1.x, guestGlassImage1.y + (guestGlassImage1.height / max_num) * i,
                guestGlassImage1.width, guestGlassImage1.height / max_num);
                gameScene.addChild(guestGlassView1[i]);
                gameScene.addChild(guestGlassImage1);
            }
            break;
        case 2:
            for(i=0; i<max_num; i++){
                guestGlassView2[i] = new PIXI.Graphics();
                guestGlassView2[i].beginFill(colorList[orderList[i]]);
                guestGlassView2[i].drawRect(guestGlassImage2.x, guestGlassImage2.y + (guestGlassImage2.height / max_num) * i,
                guestGlassImage2.width, guestGlassImage2.height / max_num);
                gameScene.addChild(guestGlassView2[i]);
                gameScene.addChild(guestGlassImage2);
            }
            break;
        case 3:
            for(i=0; i<max_num; i++){
                guestGlassView3[i] = new PIXI.Graphics();
                guestGlassView3[i].beginFill(colorList[orderList[i]]);
                guestGlassView3[i].drawRect(guestGlassImage3.x, guestGlassImage3.y + (guestGlassImage3.height / max_num) * i,
                guestGlassImage3.width, guestGlassImage3.height / max_num);
                gameScene.addChild(guestGlassView3[i]);
                gameScene.addChild(guestGlassImage3);
            }
            break;
    }
}

//グラスの中身を消す
function resetMyGlassView(){
    for(let i=0; i<myGlassView.length; i++){
        gameScene.removeChild(myGlassView[i]);
    }
    myGlassView = [];
}

function resetGuestGlassView1(){
    for(let i=0; i<guestGlassView1.length; i++){
        gameScene.removeChild(guestGlassView1[i]);
    }
    guestGlassView1 = [];
}

function resetGuestGlassView2(){
    for(let i=0; i<guestGlassView2.length; i++){
        gameScene.removeChild(guestGlassView2[i]);
    }
    guestGlassView2 = [];
}

function resetGuestGlassView3(){
    for(let i=0; i<guestGlassView3.length; i++){
        gameScene.removeChild(guestGlassView3[i]);
    }
    guestGlassView3 = [];
}


// 全体の制限時間の描画
let timerText = new PIXI.Text(timer, {fill: 0x000000,  align :'center'});
timerText.style.fontSize = gameWindowWidth/10;
timerText.width = timerImage.width/3;
timerText.height = timerImage.height/3;
timerText.x = timerImage.x + timerImage.width/2 - timerText.width/2;
timerText.y = timerImage.y + timerImage.height/2;

function drawTimer(){
    timerText.text = timer;
    gameScene.addChild(timerText);
}



// お客さん1の制限時間の描画
let guestTimerView1 = new PIXI.Text(guestTimer1, {fill: 0x000000,  align :'center'});
guestTimerView1.style.fontSize = gameWindowWidth/10;
guestTimerView1.width = guestGlassImage1.width/2;
guestTimerView1.height = guestGlassImage1.height/2;
guestTimerView1.x = guestGlassImage1.x + guestGlassImage1.width/2 - guestTimerView1.width/2;
guestTimerView1.y = guestGlassImage1.y + guestGlassImage1.height;
// 1秒ごとに実行される
function drawGuestTimer1(){
    guestTimerView1.text = guestTimer1;
    gameScene.addChild(guestTimerView1);
}



// お客さん2の制限時間の描画
let guestTimerView2 = new PIXI.Text(guestTimer2, {fill: 0x000000,  align :'center'});
guestTimerView2.style.fontSize = gameWindowWidth/10;
guestTimerView2.width = guestGlassImage2.width/2;
guestTimerView2.height = guestGlassImage2.height/2;
guestTimerView2.x = guestGlassImage2.x + guestGlassImage2.width/2 - guestTimerView2.width/2;
guestTimerView2.y = guestGlassImage2.y + guestGlassImage2.height;
// 1秒ごとに実行される
function drawGuestTimer2(){
    guestTimerView2.text = guestTimer2;
    gameScene.addChild(guestTimerView2);
}


// お客さん3の制限時間の描画
let guestTimerView3 = new PIXI.Text(guestTimer3, {fill: 0x000000,  align :'center'});
guestTimerView3.style.fontSize = gameWindowWidth/10;
guestTimerView3.width = guestGlassImage3.width/2;
guestTimerView3.height = guestGlassImage3.height/2;
guestTimerView3.x = guestGlassImage3.x + guestGlassImage3.width/2 - guestTimerView3.width/2;
guestTimerView3.y = guestGlassImage3.y + guestGlassImage3.height;
// 1秒ごとに実行される
function drawGuestTimer3(){
    guestTimerView3.text = guestTimer3;
    gameScene.addChild(guestTimerView3);
}


let theScoreText = new PIXI.Text("Score", {fill: 0x000000,  align :'center'});
theScoreText.style.fontSize = gameWindowWidth/10;
theScoreText.width = gameWindowWidth * 0.1;
theScoreText.height = timerImage.height * 0.3;
theScoreText.x = gameWindowWidth * 0.7;
theScoreText.y = gameWindowHeight * 0.5;
gameScene.addChild(theScoreText);


let scoreText = new PIXI.Text(score, {fill: 0x000000,  align :'center'});
scoreText.style.fontSize = gameWindowWidth * 0.05;
scoreText.x = gameWindowWidth * 0.85;
scoreText.y = gameWindowHeight * 0.48;
function drawScore(){
    scoreText.text = score;
    gameScene.addChild(scoreText);
}
