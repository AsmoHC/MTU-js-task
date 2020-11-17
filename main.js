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


//blocks creating

(function() {
    "use strict";

    function createDiv() {
        var blockDiv = document.createElement("div");
        blockDiv.className = "new-div";
        return blockDiv;
    }

    function createAndModifyDivs() {
        var test = document.getElementById("game-field"),
            myDivs = [],
            i = 0,
            numOfDivs = 35;

        for (i; i < numOfDivs; i += 1) {
            myDivs.push(createDiv());
            test.appendChild(myDivs[i]);
        }
    }
    createAndModifyDivs();

    document.querySelectorAll('#game-field>div').forEach(el => {
        el.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
    })
}());

// animation blocks appear

$('.new-div:eq(0)').fadeIn(300, function() {
    $(this).next().fadeIn(300, arguments.callee);
});