const add = function(a, b) {
  return (a + b)
};


const subtract = function(a, b) {
    return (a - b)
}


const multiply = function(a, b) {
    return (a * b)
}


const divide = function(a, b) {
    return (a / b)
}


function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
    default:
      return null; 
  }
}


// shared state: declared once, at the top level
let firstNumber = null;
let operator = null;
let displayValue = '0';
let waitingForSecondNumber = false;

const display = document.getElementById('input');

document.querySelectorAll('.digit').forEach(function (button) {
  button.addEventListener('click', function () {
    if (waitingForSecondNumber) {
      displayValue = this.value;       // start a fresh number
      waitingForSecondNumber = false;
    } else if (displayValue === '0') {
      displayValue = this.value;
    } else {
      displayValue += this.value;
    }
    display.value = displayValue;
  });
});

document.querySelectorAll('.operatorSymbol').forEach(function (button) {
  button.addEventListener('click', function () {
    if (operator !== null && !waitingForSecondNumber) {
      // chaining, e.g. 2 + 3 + ... : finish the first calculation
      firstNumber = operate(operator, firstNumber, Number(displayValue));
      displayValue = String(firstNumber);
      display.value = displayValue;
    } else {
      firstNumber = Number(displayValue);
    }
    operator = this.value;
    waitingForSecondNumber = true;
  });
});

document.querySelector('.equals').addEventListener('click', function () {
  if (operator === null || waitingForSecondNumber) return;
  const result = operate(operator, firstNumber, Number(displayValue));
  displayValue = String(result);
  display.value = displayValue;
  firstNumber = null;
  operator = null;
  waitingForSecondNumber = true;       // next digit starts a new calculation
});


document.querySelector('.clear').addEventListener('click', function () {
  displayValue = '0';
  display.value = displayValue;   // this line is what updates the screen
  firstNumber = null;
  operator = null;
  waitingForSecondNumber = false;
});

document.querySelector('.period').addEventListener('click', function () {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
});



