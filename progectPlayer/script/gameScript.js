const box = document.querySelectorAll('.t');
const arrColor = document.querySelectorAll('.color');
const cntColors = [4];
const divend = document.querySelector('#end');
const btnEnd = document.createElement('button');
btnEnd.innerText = "לסיום המשחק";
divend.appendChild(btnEnd);
let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');
let player1Point = document.querySelectorAll('.p1');
let player2Point = document.querySelectorAll('.p2');
let btnP1 = document.querySelector('#p1');
let btnP2 = document.querySelector('#p2');
let help = 1;
const winer =parseInt(localStorage.getItem('localwin'))|| [];
const local = JSON.parse(localStorage.getItem('dataUserNow'))||[];
  /* localStorage.setItem('localwin', JSON.stringify(winer));*/
let t1 = document.getElementById('title1');
let t2 = document.getElementById('title2');
t1.innerText = local[1].name;
t2.innerText = local[0].name;
let message1 = document.querySelector('#message1');
let message2 = document.querySelector('#message2');
let divContainer = document.querySelector('END');
let string = 0;

for (let j = 0; j < 5; j++)
    cntColors[j] = 0;
for (let f = 0; f < player1Point.length; f++) {
    player1Point[f].style.backgroundColor = arrColor[f].style.backgroundColor;
    player1Point[f].innerHTML = 0;
    player1Point[f].id = arrColor[f].style.backgroundColor;
}
for (let f = 0; f < player2Point.length; f++) {
 
    player2Point[f].style.backgroundColor = arrColor[f].style.backgroundColor;
    player2Point[f].innerHTML = 0;
    player2Point[f].id = arrColor[f].style.backgroundColor;
}

for (let i = 0; i < box.length; i++) {

    if (i == 27 || i == 28 || i == 36 || i == 35) {
        box[i].style.backgroundColor = arrColor[5].style.backgroundColor;
        box[i].id = arrColor[5].style.backgroundColor;

    }

    else {
       
        let num = Math.round(Math.random() * 4);
        
            box[i].style.backgroundColor = arrColor[num].style.backgroundColor;
            box[i].id = arrColor[num].style.backgroundColor;
            
        }  
        }

let points1 = 0;
let points2 = 0;
let x = 0;
let j = 0;
let cnt = 0;
let play = 0;
let whoPlay = 0;
let ind = 0;
let win = 0;
play1();
for (let k = 0; k < box.length && play != 3; k++) {

    box[k].addEventListener('click', function () {

        message2.innerText = '';
        if (cnt == 0) {
            x = k;
            if (box[x].id == arrColor[5].style.backgroundColor) {
                message2.innerText += "טעות";
                
                notGoood();
                cnt = 0;
                if (whoPlay == 1)
                    setTimeout(play2, 1000);
                else
                    setTimeout(play1, 1000);
            }
            else {
                play = 1;
                cnt = 1;
            }
        }
        else {
            j = k;
            if (box[j].id != arrColor[5].style.backgroundColor) {
                message2.innerText = "טעות";
              
                notGoood();
                cnt = 0;
                if (whoPlay == 1)
                    setTimeout(play2, 1000);
                else
                    setTimeout(play1, 1000);
            }

            else {
                play = 2;
                if (x == j + 2)
                    ind = x - 1;
                else
                    if (x == j - 2)
                        ind = x + 1;
                    else
                        if (x == j + 16)
                            ind = x - 8;
                        else
                            if (x == j - 16)
                                ind = j - 8;
                            else
                                ind = 100;
                if (ind == 100) {
                    message2.innerText = "טעות";
                    
                    cnt = 0;
                    notGoood();
                    if (whoPlay == 1)
                        setTimeout(play2, 1000);
                    else
                        setTimeout(play1, 1000);
                    return;
                }
                if (box[ind].id == arrColor[5].style.backgroundColor) {
                    
                    message2.innerText = "טעות ";
                    
                    cnt = 0;
                    notGoood();
                    if (whoPlay == 1)
                        setTimeout(play2, 1000);
                    else
                        setTimeout(play1, 1000);
                }
                else
                    play = 3;


                if (play == 3) {
                    if (whoPlay == 1) {
                        message2.innerText = "בחירה נכונה";

}
                    else
                        message2.innerText = "בחירה נכונה "
                    addPoint();

                }


            }

        }
    })
}

   
function play1() {
    message1.innerText = local[1].name;
    message2.innerText = '';

    ind = 0
    whoPlay = 1;
    play = 0;
    cnt = 0;
    x = 0;
    j = 0;
}

function play2() {
    message2.innerText = '';
    message1.innerText = local[0].name;

    ind = 0;
    whoPlay = 2;
    play = 0;
    cnt = 0;
    x = 0;
    j = 0;
}

function addPoint() {

    if (whoPlay == 1) {
        for (let g = 0; g < player1Point.length; g++) {
            if (box[ind].id == player1Point[g].id) {
                player1Point[g].innerText = parseInt((player1Point[g].innerText)) + 1;
                points1++;
            }

        }
    }
    else {

        for (let i = 0; i < player2Point.length; i++) {
            if (box[ind].id == player2Point[i].id) {
                points2++;
                player2Point[i].innerText = parseInt((player2Point[i].innerText)) + 1;
            }
        }

    }


    box[j].id = box[x].id;
    box[j].style.backgroundColor = box[x].id;
    box[x].style.backgroundColor = arrColor[5].style.backgroundColor;
    box[x].id = arrColor[5].style.backgroundColor
    box[ind].style.backgroundColor = arrColor[5].style.backgroundColor;
    box[ind].id = arrColor[5].style.backgroundColor
    if (whoPlay == 1)
        setTimeout(play2, 3000);
    else
        setTimeout(play1, 3000);
}

divend.addEventListener('click', function () {
    divend.removeChild(btnEnd);
    let link = document.createElement('a');
    link.innerText = "לתוצאות המשחק";
    
    link.setAttribute('href', 'endPage.html');
    link.setAttribute('target', 'Blank');
    divend.appendChild(link);
    end();
});
function notGoood() {

    let flag = 1;
    let place = Math.round(Math.random() * 4);
    if (whoPlay == 1) {
        if (points1 == 0)

            return;
        while (flag == 1) {
            if (player1Point[place].innerHTML > 0) {
                player1Point[place].innerText = parseInt((player1Point[place].innerText)) - 1;
                flag = 0;
            }

            else
                place = Math.round(Math.random() * 4);
        }
        return;
    }
    else {
        while (flag == 1) {
            if (points2 == 0)
                return;
            if (player2Point[place].innerHTML > 0) {
                player2Point[place].innerText = parseInt((player2Point[place].innerText)) - 1;
                flag = 0;
            }

            else
                place = Math.round(Math.random() * 4);

            return;
        }
    }
}

   
function end() {

    let min1 = 100;
    let min2 = 100;
    for (let i = 0; i < player1Point.length; i++) {
        if (parseInt(player1Point[i].innerText) < min1)
            min1 = parseInt(player1Point[i].innerText)
    }
    for (let i = 0; i < player2Point.length; i++) {
        if (parseInt(player2Point[i].innerText) < min2)
            min2 = parseInt(player2Point[i].innerText)
    }
    if (min2 > min1)
        win = {
            theWiner: local[0].name,
            score: min2
        }
    else {
        if (min1 < min2)
            win = {
                theWiner: local[1].name,
                score: min1

            }
        else 
            win = {
                theWiner: "טיקו",
                score: min1

           
        }
        }
    winer.unshift(win);
    localStorage.setItem('localwin', JSON.stringify(winer));
    }

