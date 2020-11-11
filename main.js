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