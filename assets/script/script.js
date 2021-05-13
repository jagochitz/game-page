let printAnswer = document.createElement("p");
const button = document.querySelector("#ask");
button.addEventListener("click", function () {
  let answerTarget = document.querySelector("#answer");
  printAnswer.innerHTML = "";
  printAnswer.innerHTML = answer();
  answerTarget.appendChild(printAnswer);
});

function getRandomanswer() {
  let min = 1;
  let max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomanswer());

const answer = () => {
  let answerNumber = getRandomanswer();
  let answer = answerNumber;
  let writeAnswer = "";
  if (answer === 1) {
    writeAnswer = "Better not tell you now";
  } else if (answer === 2) {
    writeAnswer = "Signs point that yes";
  } else if (answer === 3) {
    writeAnswer = "Very doubtful";
  } else if (answer === 4) {
    writeAnswer = "Yes, definitely";
  } else if (answer === 5) {
    writeAnswer = "Do not count on it";
  } else if (answer === 6) {
    writeAnswer = "Cloudy answer, try again";
  } else if (answer === 7) {
    writeAnswer = "You can count on it!";
  } else if (answer === 8) {
    writeAnswer = "Probably";
  } else if (answer === 9) {
    writeAnswer = "It doesn't look very good";
  } else if (answer === 10) {
    writeAnswer = "Couldn't predict now";
  }
  return writeAnswer;
};
