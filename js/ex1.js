let userInput = prompt("Enter a number between 1 and 100:");
let num = Number(userInput);

if (
  userInput !== "" &&
  !isNaN(num) &&
  Number.isInteger(num) &&
  num >= 1 &&
  num <= 100
) {
  console.log(`Thank you! You entered ${num}, a valid number.`);
} else {
  console.log(`Sorry, ${userInput} is not a valid entry.`);
}