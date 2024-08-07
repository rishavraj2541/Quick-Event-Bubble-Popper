var timer = 60;
var score = 0;
var hitrn = 0;
const bubbles = [];

function increaseScore() {
    score += 1;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    for (let i = 1; i <= 166; i++) {
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.textContent = Math.floor(Math.random() * 10);
        bubble.style.textAlign = "center";

        bubbles.push(bubble);
    }

    const pbtm = document.querySelector("#pbtm");

    bubbles.forEach((bubble) => {
        pbtm.appendChild(bubble);
    });
}

function runTimer() {
    const timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm")
    .addEventListener("click", function(dets) {
        var clickednum = Number(dets.target.textContent);
        if (clickednum == hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    });

runTimer();
makeBubble();
getNewHit();
