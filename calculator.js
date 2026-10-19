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

const digitButton = document.querySelectorAll('.digit')
digitButton.forEach(function(el){
  el.addEventListener('click', function () {
    if (id = "one")
      console.log(7);
    else console.log(3)
  });
});










