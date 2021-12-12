// test
drawOrder(guestGlass1,1)
drawOrder(guestGlass2,2)
drawOrder(guestGlass3,3)


// 1秒ごとに実行される
function main(){
    if(timer == 0){
        /*ゲーム終了*/
        clearInterval(mainLoop);
        gameOverBGM.play();
        fromGameSceneToScoreScene();
    }else if(timer == 60){
        initializeGlasses();
    }
    decrementTimer();
    drawTimer();
    drawGuestTimer1();
    drawGuestTimer2();
    drawGuestTimer3();
    drawScore();
}