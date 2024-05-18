// Variables HTML
var btnMarkQuiz = document.getElementById("btnMarkQuiz");
var score = document.getElementById("score");
var descrMark = document.getElementById("descr-mark");

var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
var inp3 = document.getElementById("inp3");
var inp4 = document.getElementById("inp4");
var inp5 = document.getElementById("inp5");

var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");
var span4 = document.getElementById("span4");
var span5 = document.getElementById("span5");

// Event Listener
btnMarkQuiz.addEventListener("click", showResults);

function showResults() {
  // Additional quantities (estimates)
  let markPart1 = 0;
  let markPart2 = 0;
  let markPart3 = 0;
  let markPart4 = 0;
  let markPart5 = 0;

  // Variables js
  let inp1Value = inp1.value;
  inp1Value = inp1Value.toLowerCase();

  let inp2Value = inp2.value;
  inp2Value = inp2Value.toLowerCase();

  let inp3Value = inp3.value;
  inp3Value = inp3Value.toLowerCase();

  let inp4Value = inp4.value;
  inp4Value = inp4Value.toLowerCase();

  let inp5Value = inp5.value;
  inp5Value = inp5Value.toLowerCase();

  // Question 1
  if (
    inp1Value === "pi rad" ||
    inp1Value === "180 degrees" ||
    inp1Value === "math.pi rad" ||
    inp1Value === "half a circle"
  ) {
    markPart1 = markPart1 + 1;

    inp1.style.border = "2px solid green";

    span1.innerHTML = "correct";
    span1.style.color = "green";
  } else {
    markPart1 = markPart1 + 0;

    inp1.style.border = "2px solid red";

    span1.innerHTML = "incorrect";
    span1.style.color = "red";
  }

  // Guestion 2
  if (
    inp2Value === "i" ||
    inp2Value === "sqrt(-1)" ||
    inp2Value === "imaginary unit" ||
    inp2Value === "complex number"
  ) {
    markPart2 = markPart2 + 1;

    inp2.style.border = "2px solid green";

    span2.innerHTML = "correct";
    span2.style.color = "green";
  } else {
    markPart2 = markPart2 + 0;

    inp2.style.border = "2px solid red";

    span2.innerHTML = "incorrect";
    span2.style.color = "red";
  }

  // Question 3
  if (
    inp3Value === "additional method" ||
    inp3Value === "substitution method" ||
    inp3Value === "graphic method"
  ) {
    markPart3 = markPart3 + 1;

    inp3.style.border = "2px solid green";

    span3.innerHTML = "correct";
    span3.style.color = "green";
  } else {
    markPart3 = markPart3 + 0;

    inp3.style.border = "2px solid red";

    span3.innerHTML = "incorrect";
    span3.style.color = "red";
  }

  // Question 4
  if (inp4Value === "linear algebra") {
    markPart4 = markPart4 + 1;

    inp4.style.border = "2px solid green";

    span4.innerHTML = "correct";
    span4.style.color = "green";
  } else {
    markPart4 = markPart4 + 0;

    inp4.style.border = "2px solid red";

    span4.innerHTML = "incorrect";
    span4.style.color = "red";
  }

  // Question 5
  if (
    inp5Value === "pythagorean theorem" ||
    inp5Value === "calculus differential and integral" ||
    inp5Value === "probability theory" ||
    inp5Value === "number theory" ||
    inp5Value === "euclid's geometry" ||
    inp5Value === "mathematical logic" ||
    inp5Value === "limits" ||
    inp5Value === "group theory" ||
    inp5Value === "fractals" ||
    inp5Value === "derivative of a function"
  ) {
    markPart5 = markPart5 + 1;

    inp5.style.border = "2px solid green";

    span5.innerHTML = "correct";
    span5.style.color = "green";
  } else {
    markPart5 = markPart5 + 0;

    inp5.style.border = "2px solid red";

    span5.innerHTML = "incorrect";
    span5.style.color = "red";
  }

  // Show score
  let sumMark = markPart1 + markPart2 + markPart3 + markPart4 + markPart5;

  score.innerHTML =
    sumMark + "/" + "5" + " " + "(" + (sumMark / 5) * 100 + "%" + ")";

  // Show a description of the rating depending on its value
  if (sumMark == 0) {
    descrMark.innerHTML = "Too bad! You have to study much more!";
  } else if (sumMark == 1) {
    descrMark.innerHTML = "Bad! Study more";
  } else if (sumMark == 2) {
    descrMark.innerHTML = "So-so... Maybe you need to study more";
  } else if (sumMark == 3) {
    descrMark.innerHTML = "Not too bad, but can be better";
  } else if (sumMark == 4) {
    descrMark.innerHTML = "Good! You have studied the topic quite well!";
  } else if (sumMark == 5) {
    descrMark.innerHTML = "Very well done!";
  }
}
