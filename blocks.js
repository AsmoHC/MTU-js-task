"use strict";
//blocks creating


function randomPosX(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomPosY(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var x = randomPosX(601);
var y = randomPosY(401);

(function blocks() {


    function randomNum(min, max) {
        min = Math.ceil(1);
        max = Math.floor(3);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function createDiv() {
        var blockDiv = document.createElement("div");
        blockDiv.className = "new-div";
        document.querySelectorAll('#game-field>div').forEach(el => {
            el.style.left = x + 'px';
            el.style.top = y + 'px';
        })
        return blockDiv;

    }


    function createAndModifyDivs() {
        var test = document.getElementById("game-field"),
            myDivs = [],
            i = 0,
            numOfDivs = randomNum(3);

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

// let rndCube = document.querySelector('.new-div');
// let pointsNumber = document.querySelector('.points-number');
// let counter = 0;

// rndCube.onclick = function() {
//     counter++;
//     pointsNumber.textContent = counter;
//     rndCube.classList.toggle('added');
//     console.log;
// };