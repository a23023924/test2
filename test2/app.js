'use strict';
var poker_suit = ["黑桃", "方塊", "愛心", "梅花"];
var poker_number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var elicitation = [5];//發牌結果
var i = 0;//抽牌數量 目標為五
while (true) {
    let poker_result = "", ran_suit = 0, ran_num = 0, poker_repeat = 0;

    ran_suit = Math.floor(Math.random() * 4);//取得隨機花色
    ran_num = Math.floor(Math.random() * 13);//1~K隨機數字

    poker_result = poker_suit[ran_suit];
    poker_result += poker_number[ran_num];//組合花色
    for (let j = 0; j < i; j++) {
        if (poker_result == elicitation[j]) {//判斷是否重複
            poker_repeat++;
        }
    }
    if (poker_repeat == 0) {
        elicitation[i] = poker_result;
        i++;
        poker_result = "";//清空花色
        poker_repeat = 0;
    }
    if (i == 5) break;
}

console.log(elicitation);

//}




elicitation = ["黑桃A", "黑桃2", "黑桃3", "黑桃4", "黑桃K"];
//while (true) {//是否有牌型
var repeat = 0;//同花順

//取出花色
for (let j = 1; j < 5; j++) {
    if (elicitation[0].substr(0, 2) == elicitation[j].substr(0, 2)) {
        repeat++;
    }
}

//取出數字
if (repeat == 4) {
    console.log(repeat);
    var num = [5];
    for (let i = 0; i < 5; i++) {
        switch (elicitation[i].substr(2, 1)) {
            case 'A':
                num[i] = "1";
                break;
            case 'J':
                num[i] = "11";
                break;
            case 'Q':
                num[i] = "12";
                break;
            case 'K':
                num[i] = "13";
                break;
            default:
                num[i] = elicitation[i].substr(2, 1);
        }
    }
    for (let i = 0; i < 5; i++) {
        number

    }
    console.log(num);
}


console.log("1231")