// relations
const buttonSpoisty = document.getElementById("button-spoisty");
const buttonNiespoisty = document.getElementById("button-niespoisty");
const buttonOblicz = document.getElementById("button-oblicz");
const outputC = document.getElementById("output-c");
const outputFi = document.getElementById("output-fi");
const outputM0 = document.getElementById("output-M0");
const outputE0 = document.getElementById("output-E0");
const litologySelect = document.getElementById("litology-select");
const parameterInputField = document.getElementById("parameter-input-field");
const parameterInputFieldLabel = document.getElementById(
  "parameter-input-field-label"
);
const parameterInputFieldRange = document.getElementById(
  "parameter-input-field-range"
);

//database
import { data } from "./data.js";

// Data: position in array parallels to ID / IL parameter.
// Relation is fixed on equation:
// a = ((parameterInputField * 100) -20), a - position in array for gruntyNiespoiste category
// b = (parameterInputField * 100), b - position in array for gruntySpoiste category

/* functions */

function generateOptions(cohesion, parameter, minRange, maxRange) {
  litologySelect.textContent = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].cohesion === cohesion) {
      const option = new Option(data[i].litology, i);
      litologySelect.add(option);
    }
  }
  parameterInputFieldLabel.textContent = `Wprowadź stopień ${parameter}:`;
  parameterInputFieldRange.textContent = `Wartość w przedziale: od ${minRange.toFixed(2)} do ${maxRange.toFixed(2)}`;
}

function showParameters(param) {
  outputC.textContent = data[litologySelect.value].parameters[param].C;
  outputFi.textContent = data[litologySelect.value].parameters[param].Fi;
  outputM0.textContent = data[litologySelect.value].parameters[param].M0;
  outputE0.textContent = data[litologySelect.value].parameters[param].E0;
}

function clearParameters() {
  outputC.textContent = "-";
  outputFi.textContent = "-";
  outputM0.textContent = "-";
  outputE0.textContent = "-";
}

function renderParameters() {
  const ID = (parameterInputField.value * 100 - 20).toFixed(0);
  const IL = (parameterInputField.value * 100).toFixed(0);
  if (data[litologySelect.value].cohesion === "niespoiste") {
    showParameters(ID);
  } else {
    showParameters(IL);
  }
}

/* events */

litologySelect.addEventListener("click", function () {
  clearParameters();
});

parameterInputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    try{
      renderParameters();
    } catch (err) {
      console.error(err);
      const errorMessage = document.createElement("div")
      errorMessage.classList.add("message");
      errorMessage.textContent = "Wpisana wartość nie zawiera się w wymaganym przedziale.";
      document.body.appendChild(errorMessage);
      setTimeout(() => {
        document.body.removeChild(errorMessage)        
      }, 1500);
    }
  } else if (event.key === "Backspace") {
    clearParameters();
  }
});

buttonSpoisty.addEventListener("click", function () {
  generateOptions("spoiste", "plastyczności", 0.0, 0.75);
  clearParameters();
});

buttonNiespoisty.addEventListener("click", function () {
  generateOptions("niespoiste", "zagęszczenia", 0.2, 1.0);
  clearParameters();
});

buttonOblicz.addEventListener("click", renderParameters);
