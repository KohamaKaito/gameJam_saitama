// ゲームモデル


// app_setting.js で定義
// gameWindowWidth・・・ゲーム画面の幅
// gameWindowHeight・・・ゲーム画面の高さ


function clickLiqueur(e){
    console.log(e.data.name)
}


// 例
let myGrass = [1,1,2,2]
let guestGrass1 = [2,2,1,1]
let guestGrass2 = [1,2,1,2]
let guestGrass3 = [2,1,2,1]
let guestGrass4 = [1,1,2,3]


// 正解判定
function judge(guestGrass){
    myGrass.sort() //sort
    guestGrass.sort() //sort
    if(JSON.stringify(myGrass) == JSON.stringify(guestGrass)){
        return true
    }else{
        return false
    }
}


// 例
judge(guestGrass1)
judge(guestGrass2)
judge(guestGrass3)
judge(guestGrass4)