let firstNumber;
let operator;
let secondNumber;


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
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null; 
  }
}

const display = document.getElementById('input');
let displayValue = '0';

document.querySelectorAll('.digit').forEach(function (button) {
  button.addEventListener('click', function () {
    if (displayValue === '0') {
      displayValue = this.value;
    } else {
      displayValue += this.value;
    }
    display.value = displayValue;
  });
});





