const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

let correct = document.getElementById("correct").innerHTML;
let incorrect = document.getElementById("incorrect").innerHTML;
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const ansEl = document.getElementById("lastAns");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("keepScore"));
let ansText = JSON.parse(localStorage.getItem("ans"));

if (!score) {
    score = 0;
}

correct = "Correct !";
incorrect = "Incorrect !";

if (!ansText) {
    ansText = "Last Answer : Invalid";
}

scoreEl.innerText = `score: ${score}`;

ansEl.innerHTML = ansText;

questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if (correctAns === userAns) {
        ansText = `Last answer : ${correct}`;

        score++;
        updateLocalStorate();
    } else {
        ansText = `Last answer : ${incorrect}`;

        score--;
        updateLocalStorate();
    }
});

function updateLocalStorate() {
    localStorage.setItem("keepScore", JSON.stringify(score));
    localStorage.setItem("ans", JSON.stringify(ansText));
}

function reset() {
    localStorage.clear();
    location.reload();
}
