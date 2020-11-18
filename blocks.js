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