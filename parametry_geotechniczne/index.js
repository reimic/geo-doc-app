// relations
const buttonSpoisty = document.getElementById("button-spoisty")
const buttonNiespoisty = document.getElementById("button-niespoisty")
const buttonOblicz = document.getElementById("button-oblicz")
const outputC = document.getElementById("output-c")
const outputFi = document.getElementById("output-fi")
const outputM0 = document.getElementById("output-M0")
const outputE0 = document.getElementById("output-E0")
const litologySelect = document.getElementById("litology")
const parameterInputField = document.getElementById("parameter-input-field")
const parameterInputFieldLabel = document.getElementById("parameter-input-field-label")
const parameterInputFieldRange = document.getElementById("parameter-input-field-range")

//database
import {data} from './data.js'

// Data: position in array parallels to ID / IL parameter. 
// Relation is fixed on equation:
// a = ((parameterInputField * 100) -20), a - position in array for gruntyNiespoiste category
// b = (parameterInputField * 100), b - position in array for gruntySpoiste category

/* functions */

function generateOptions(cohesion, parameter, minRange, maxRange) {
    litologySelect.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        if (data[i].cohesion === cohesion) {
            let Opt= new Option (data[i].litology,i)
            litologySelect.add(Opt)
        }
    }
    parameterInputFieldLabel.textContent = `Wprowadź stopień ${parameter}:`
    parameterInputFieldRange.innerHTML = `Wartość w przedziale:<br>od ${minRange} do ${maxRange}`
}


function showParameters(param) {
  const litologySelectValue = litologySelect.value

  outputC.innerHTML = data[litologySelectValue].parameters[param].C
  outputFi.innerHTML = data[litologySelectValue].parameters[param].Fi
  outputM0.innerHTML = data[litologySelectValue].parameters[param].M0
  outputE0.innerHTML = data[litologySelectValue].parameters[param].E0
}

function clearParameters() {
  outputC.innerHTML = "-"
  outputFi.innerHTML = "-"
  outputM0.innerHTML = "-"
  outputE0.innerHTML = "-"
}

function renderParameters(){
  const litologySelectValue = litologySelect.value
  const ID = (parameterInputField.value*100-20).toFixed(0)
  const IL = (parameterInputField.value*100).toFixed(0)
    if (data[litologySelectValue].cohesion === "niespoiste") {
        showParameters(ID)
    } else {
        showParameters(IL)
    }
}

/* events */

litologySelect.addEventListener("click", function() {
  clearParameters()
})

parameterInputField.addEventListener("keydown",(event) => {
  if (event.key === "Enter"){
    event.preventDefault()
    renderParameters()
  } else if (event.key === "Backspace"){
    clearParameters()
  }
})

buttonSpoisty.addEventListener("click", function(){
    generateOptions("spoiste", "plastyczności", 0.00, 0.75)
    clearParameters()
})

buttonNiespoisty.addEventListener("click", function(){
    generateOptions("niespoiste", "zagęszczenia", 0.20, 1.00)
    clearParameters()
})


buttonOblicz.addEventListener("click", renderParameters)

