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
//elicitation = ["黑桃5", "愛心A", "方塊2", "黑桃4", "愛心3"];
hand_type();


//是否有牌型

function hand_type() {
    let repeat = 0;//同花順或是順子

    //取出花色
    for (let j = 1; j < 5; j++) {
        if (elicitation[0].substr(0, 2) == elicitation[j].substr(0, 2)) {
            repeat++;
        }
    }

    //取出數字
    if (repeat == 4) {
        var num = [5];
        for (let i = 0; i < 5; i++) {
            switch (elicitation[i].substr(2, 2)) {//取得數字
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
                case '10':
                    num[i] = "10";
                    break;
                default:
                    num[i] = elicitation[i].substr(2, 1);
            }
        }
        for (let i = 0; i < 5; i++)num[i] = Number(num[i]);//轉為INT

        num.sort(function (a, b) {//進行正序
            return a - b;
        });

        let amount = 0;
        for (let i = 0; i < 5; i++) {//判斷是否連號
            if (num[i] + 1 == num[i + 1])
                amount++;
        }
        if (amount == 4) console.log("同花順");
    }
    else {
        var num = [5];
        for (let i = 0; i < 5; i++) {
            switch (elicitation[i].substr(2, 2)) {//取得數字
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
                case '10':
                    num[i] = "10";
                    break;
                default:
                    num[i] = elicitation[i].substr(2, 1);
            }
        }
        for (let i = 0; i < 5; i++)num[i] = Number(num[i]);//轉為INT

        num.sort(function (a, b) {//進行正序
            return a - b;
        });

        let amount = 0;
        for (let i = 0; i < 5; i++) {//判斷是否連號
            if (num[i] + 1 == num[i + 1])
                amount++;
        }
        if (amount == 4) console.log("順子");
    }
    let j = 0;
    for (let i = 0; i < 5; i++) {//葫蘆3張數子一樣的牌再加一個對子
        if (num[i] == num[i + 1])
            j++;//2+1
    }
    if (j == 3) console.log("葫蘆");
}




console.log("1231");