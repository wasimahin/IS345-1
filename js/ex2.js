function calculate(number1, number2, operation) {
  let result;

  switch (operation) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
  }

  return `${number1} ${operation} ${number2} = ${result}`;
}

let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));
let operation = prompt("Enter an operation (+, -, *, /):");

let output = calculate(number1, number2, operation);
console.log(output);