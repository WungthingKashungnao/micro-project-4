let buttons = document.querySelectorAll("button");
let screenResult = document.querySelector(".screen");
let calculation = new Array(); //array to store the operations and numbers
let screenOutput; //varaible used to final reslult in string format

function calculate(button) {
  const value = button.textContent;
  if (value === "RESET") {
    calculation = [];
    screenResult.textContent = "";
  } else if (value === "DEL") {
    calculation.pop();
    screenResult.textContent = calculation.join("");
  } else if (value === "=") {
    let calcString = eval(screenOutput).toString(); //evaluating the screen output and converting the result to string
    calculation = [...calcString]; //using spred operator to convert string to array

    screenResult.textContent = eval(screenOutput);
  } else {
    if (value === "x") {
      calculation.push("*");
      screenOutput = calculation.join("");
      screenResult.textContent = screenOutput;
    } else {
      calculation.push(value);
      screenOutput = calculation.join("");
      screenResult.textContent = screenOutput;
    }
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
