/*おみくじの簡単なもの*/

function omikujishow(){
    var omikuji = new Array("大吉","中吉","小吉","凶");

    var num1 = Math.random();
    var num2 = num1*4;//0<=num2<3
    var num = Math.floor(num2);//切り捨て
    var result = omikuji[num];

    var object=document.getElementById("omikuji");
    object.innerText = result;//object←result
}



