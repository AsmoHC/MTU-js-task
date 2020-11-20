var startButton = document.getElementById('start-button'),
    gameField = document.getElementById('game-field'),
    scoreElement = document.getElementById('score'),
    score = 0,
    leaderBoardElement = document.getElementById('leaderboard-list');
timer;

function randomPosX(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomPosY(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomAmountOfCubes() {
    return Math.floor(Math.random() * 3);
}

function createCube() {
    var cube = document.createElement('div'),
        x = randomPosX(600),
        y = randomPosY(400);
    cube.className = 'cube';
    cube.style.left = x + 'px';
    cube.style.top = y + 'px';
    cube.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
    cube.addEventListener('click', function cubeClicked() {
        score++;
        scoreElement.innerHTML = 'Score: ' + score;
        gameField.removeChild(cube);
        addCubes();
    });
    return cube;
}

function addCubes() {
    var amountOfCubes = getRandomAmountOfCubes(),
        cubes = [];

    for (var i = 0; i < amountOfCubes; i += 1) {
        var newCube = createCube();
        cubes.push(newCube);
        gameField.appendChild(newCube);

    }

    cubes.forEach(animateCube);

    // In case we are out of cubes on the game field
    if (gameField.children.length === 0) {
        var additionalCube = createCube();
        gameField.appendChild(additionalCube);
        animateCube(additionalCube);
    }

}

function animateCube(cube) {
    setTimeout(function() {
        cube.style.opacity = 1;
    }, 10);
}

function setTimer() {
    var seconds = 7,
        timerElement = document.getElementById('timer');

    timer = setInterval(function() {
        --seconds;
        timerElement.innerHTML = seconds;
        if (seconds === 0) {
            timerElement.innerHTML = 0;
            // to see 0 in the timer before the alert shows
            setTimeout(function() {
                clearInterval(timer);
                alert('Game Over!');
                addRecordToALeaderboard(score);
                score = 0;
                scoreElement.innerHTML = 'Score: 0';
                startButton.disabled = false;
                timerElement.innerHTML = 60;
                clearGameField();
            }, 5);
        }
    }, 1000)

}

function addRecordToALeaderboard(score) {
    var scoreItem = document.createElement('li');
    scoreItem.innerHTML = score;
    leaderBoardElement.appendChild(scoreItem);
}

function clearGameField() {
    gameField.innerHTML = '';
}


function startGame() {
    startButton.disabled = true;
    addCubes();
    setTimer();
}