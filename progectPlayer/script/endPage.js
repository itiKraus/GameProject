let h2 = document.querySelector('#w');
let loc = JSON.parse(localStorage.getItem('localwin')) || [];
h2.innerHTML = loc[0].theWiner + "<br/>כמות סטים: " + loc[0].score;
