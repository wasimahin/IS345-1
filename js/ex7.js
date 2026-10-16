const content = document.getElementById("content");

const first = prompt("Enter the first integer:") ?? "";
const second = prompt("Enter the second integer:") ?? "";

const isInteger = (value) =>
  /^[+-]?\d+$/.test(value.trim()) && Number.isSafeInteger(Number(value));

const redBold = (text) => {
  const span = document.createElement("span");
  span.style.color = "red";
  span.style.fontWeight = "bold";
  span.textContent = text;
  return span;
};

const message = document.createElement("p");

if (isInteger(first) && isInteger(second)) {
  const num1 = Number(first);
  const num2 = Number(second);
  message.append(`${num1} + ${num2} = `, redBold(num1 + num2));
} else {
  message.append(
    redBold("Error!"),
    ` You must enter integers. You entered "${first}" and "${second}". Try again.`
  );
}

content.appendChild(message);