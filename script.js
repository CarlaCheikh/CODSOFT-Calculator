const screenDisplay = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let calculation = [];
let accumulativeCalc;
screenDisplay.textContent = 0;

function calculate(button) {
  const value = button.textContent;

  if (value === "C") {
    calculation = [];
    screenDisplay.textContent = "0";
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumulativeCalc);
  } else {
    calculation.push(value);
    accumulativeCalc = calculation.join("");
    screenDisplay.textContent = accumulativeCalc;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
