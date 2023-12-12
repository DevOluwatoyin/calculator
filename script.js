const questionDisplay = document.getElementById("display");
const answerDisplay = document.getElementById("result");
const digits = document.querySelectorAll(".digit");
const equalTo = document.getElementById("equalto");

for (const digit of digits) {
  digit.addEventListener("click", function (e) {
    questionDisplay.value += e.target.value;
    // console.log(e.target.value);
  });
}

equalTo.addEventListener("click", function (e) {
  try {
    let answer = eval(questionDisplay.value);
    answerDisplay.value = answer;
    console.log(eval(questionDisplay.value));
    questionDisplay.value = "";
  } catch (error) {
    answerDisplay.value = "syntax error";
    console.log(error);
  }
});
