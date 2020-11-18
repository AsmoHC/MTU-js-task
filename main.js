// timer countdown
var cdtime;
var minutes = 1;
var seconds = 00;

function countdown(element) {
    cdtime = setInterval(function() {
        var timer = document.getElementById(element);
        if (seconds == 0) {
            if (minutes == 0) {
                alert(timer.innerHTML = "game over");
                clearInterval(cdtime);
                return;
            } else {
                minutes--;
                seconds = 60;
            }
        }
        var secondstxt;
        if (seconds > 1) {
            secondstxt = 'seconds';
        } else {
            secondstxt = 'second';
        }
        timer.innerHTML = seconds + ' ' + secondstxt;
        seconds--;
    }, 1000);
}

// animation random blocks appear
$.fn.shuffle = function() {
    var m = this.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = this[m];
        this[m] = this[i];
        this[i] = t;
    }
    return this;
};
$('.new-div').shuffle().each(function(n) {
    $(this).delay(n * 900).fadeTo(1500, 1);
});

//points
// let cubeDiv = document.querySelector('.new-div');
// let pointsNumber = document.querySelector('.points-number');
// let counter = 0;

// cubeDiv.onclick = function() {
//     counter++;
//     pointsNumber.textContent = counter;

//     cubeDiv.classList.toggle('added');
// };

let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');
let counter = 0;

heart.onclick = function() {
    counter++;
    likesNumber.textContent = counter;
    heart.classList.toggle('added');
};