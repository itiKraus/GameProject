
const userP = document.querySelectorAll('.userP');
const userN = document.querySelectorAll('.userN');
const users = JSON.parse(localStorage.getItem('dataUsers')) || [];
const usersNow = JSON.parse(localStorage.getItem('dataUserNow')) || [] ;
const body = document.querySelector('body');
let divbtn = document.querySelector('#divbtn');
let btn = document.createElement('button');
let who = 0;
let dis = 0;
let w = 0;
btn.innerText = "אשור";
divbtn.appendChild(btn);

btn.addEventListener('click', function () {
    if (dis != 2) 
        checkIndex();
   
        if(dis == 2) {
            divbtn.removeChild(btn);
        let link = document.createElement('a');
            link.innerText = 'לחץ למעבר למשחק';
            link.setAttribute('target', 'Blank');
        link.setAttribute('href', 'gameScript.html');
        divbtn.appendChild(link);
    }
   
       


});

function checkDetails(index) {

    if (userN[index].value == "" || userP[index].value == "") {
        alert('חסרים פרטים אישיים');
        dis = 0;
        return;
    }
    else
        isInDataBase(index);

}

function isInDataBase(index) {
    if ((users.length != 0)) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].pass == userP[index].value && users[i].name == userN[index].value) {
                dis = 1;
                alert('welcomeBack');
                let userNow = {
                    name: userN[index].value,
                    pass: userP[index].value

                }
                usersNow.unshift(userNow);
                localStorage.setItem('dataUserNow', JSON.stringify(usersNow));
                return;
            }
            else
                if (users[i].pass == userP[index].value) {
                    alert('סיסמה זו נמצאת כבר בשימוש בחר סיסמה אחרת');
                    userP[index].value = "";
                    userP[index].removeAttribute('disabled');
                    dis = 0;
                    return;
                }

        }
    }
    dis = 1;
    kelet(index);
}



function checkIndex() {

    if (w == 0) {
        checkDetails(0);

        if (dis == 1) {


            userN[0].setAttribute('disabled', 'disabled');
            userP[0].setAttribute('disabled', 'disabled');
            userN[1].removeAttribute('disabled');
            userP[1].removeAttribute('disabled');
            w = 1;
        }
    }
    else {
        checkDetails(1);
        if (dis == 1) {
            userN[1].setAttribute('disabled', 'disabled');
            userP[1].setAttribute('disabled', 'disabled');
            dis = 2;
        }
    }
}




function kelet(index) {
    let user = {
        name: userN[index].value,
        pass: userP[index].value,

    }
    users.push(user);
    localStorage.setItem('dataUsers', JSON.stringify(users));
    userN[index] = "";
    userP[index] = "";
    
    let userNow = {
        name: userN[index].value,
        pass: userP[index].value

    }
    usersNow.unshift(userNow);
    localStorage.setItem('dataUserNow', JSON.stringify(usersNow));
}
