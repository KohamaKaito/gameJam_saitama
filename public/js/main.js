// test
guestGlass1 = createOrder();
guestGlass2 = createOrder();
guestGlass3 = createOrder();

drawOrder(guestGlass1,1)
drawOrder(guestGlass2,2)
drawOrder(guestGlass3,3)


// 1秒ごとに実行される
function main(){
    if(timer == 0){
        /*ゲーム終了*/
    }
    decrementTimer();
    drawTimer();
    drawGuestTimer1();
    drawGuestTimer2();
    drawGuestTimer3();
    drawScore();
}