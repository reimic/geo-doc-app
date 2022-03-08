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

// variables
/* 
const gruntyNiespoiste = ["żwiry i pospółki", "piaski grube i średnie", "piaski drobne i pylaste"]
const gruntySpoiste = ["piaski gliniaste i pyły", "gliny piaszczyste, gliny i gliny pylaste", "gliny piaszczyste zwięzłe, gliny zwięzłe i gliny pylaste zwięzłe", "iły"]
*/

const gruntyNiespoiste = {
    ZwiryPospolki: "żwiry i pospółki",
    PiaskiGrubeSrednie: "piaski grube i średnie", 
    PiaskiDrobnePylaste: "piaski drobne i pylaste"
}


const gruntySpoiste = {
    PiaskiGliniastePyly: "piaski gliniaste i pyły",
    Gliny: "gliny piaszczyste, gliny i gliny pylaste", 
    GlinyZwiezle: "gliny piaszczyste zwięzłe, gliny zwięzłe i gliny pylaste zwięzłe",
    Ily: "iły"
}

// Data: position in array parallels to ID / IL parameter. 
// Relation is fixed on equation:
// a = ((parameterInputField * 100) / 20) -1, a - position in array for gruntyNiespoiste category
// b = (parameterInputField * 100), b - position in array for gruntySpoiste category

const dataSpoiste = [
           
    {litology: "piaski grube i średnie", 
    parameters: [{E0: 2, delta: 3, c: 4, fi: 5, E: 6, M: 7},
    {E0: 3, delta: 4, c: 5, fi: 6, E: 7, M: 8}]},

    {litology: "piaski drobne i pylaste",
    parameters: [{}]},

        {litology: "piaski gliniaste i pyły",
        parameters: [{}]},
    
        {litology: "gliny piaszczyste, gliny i gliny pylaste",
        parameters: [{}]},
    
        {litology: "gliny piaszczyste zwięzłe, gliny zwięzłe i gliny pylaste zwięzłe",
        parameters: [{}]},
    
        {litology: "iły",
        parameters: [{}]},
    
        ]



const dataNiespoiste =
    { ZwiryIPospolki: [{E0: 2, delta: 3, c: 4, fi: 5, E: 6, M: 7},
    {E0: 3, delta: 4, c: 5, fi: 6, E: 7, M: 8}]}
    

function showParameters() {
    let ID = parseFloat(parameterInputField.value)*100/20-1
    let IL = parseFloat(parameterInputField.value)*100
        outputC.innerHTML = `<p> Spójność gruntu c [kPa]</p>
        <h3>${dataNiespoiste.ZwiryIPospolki[ID].c}</h3>`
grunty.
        outputFi.innerHTML = `<p> Kąt tarcia wewnętrznego f [o]</p>
        <h3>${dataNiespoiste.ZwiryIPospolki[ID].fi}</h3>`

        outputM0.innerHTML = `<p> Edometryczny moduł ściśliwości pierwotnej M [kPa]</p>
        <h3>${dataNiespoiste.ZwiryIPospolki[ID].M}</h3>`

        outputE0.innerHTML = `<p> Edometryczny moduł odkształcenia pierwotnego E [kPa]</p>
        <h3>${dataNiespoiste.ZwiryIPospolki[ID].E}</h3>` 

        console.log(dataNiespoiste.ZwiryIPospolki[ID].c)
        console.log(dataNiespoiste.ZwiryIPospolki[ID].fi)
        console.log(dataNiespoiste.ZwiryIPospolki[ID].M)
        console.log(dataNiespoiste.ZwiryIPospolki[ID].E)

}

console.log(litologySelect.id)
/* functions */
buttonSpoisty.addEventListener("click", function(){
    showOptions(gruntySpoiste, "plastyczności", 0.00, 0.75)
})

buttonNiespoisty.addEventListener("click", function(){
    showOptions(gruntyNiespoiste, "zagęszczenia", 0.20, 1.00)
})


function showOptions(grunty, parameter, minRange, maxRange) {
    litologySelect.innerHTML = ""
    let values = Object.values(grunty)
    for (val of values) {
        let gruntOpt = new Option (val,val)
        litologySelect.add(gruntOpt)
        console.log(val)
    }
    parameterInputFieldLabel.textContent = `Wprowadź stopień ${parameter}:`
    parameterInputFieldRange.innerHTML = `Wartość w przedziale:<br>od ${minRange}  do ${maxRange}`
}


/* events */

buttonOblicz.addEventListener("click", function() {
    showParameters()
})
