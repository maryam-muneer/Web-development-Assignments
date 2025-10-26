// store all elements in one object using querySelector
const tempConverter = {
  input: document.querySelector("input"),
  unit: document.querySelector("select"),
  button: document.querySelector("button"),
  result: document.querySelector(".result")
};

// add event listener to button
tempConverter.button.addEventListener("click", () => {
  const value = parseFloat(tempConverter.input.value);
  const unit = tempConverter.unit.value;

  if (isNaN(value)) {
    tempConverter.result.textContent = "Please enter a valid number!";
    return;
  }

  let convertedTemp, convertedUnit;

  if (unit === "Celsius") {
    convertedTemp = (value * 9/5) + 32;
    convertedUnit = "°F (Fahrenheit)";
  } else {
    convertedTemp = (value - 32) * 5/9;
    convertedUnit = "°C (Celsius)";
  }

  tempConverter.result.textContent = `Converted: ${convertedTemp.toFixed(2)} ${convertedUnit}`;
});
