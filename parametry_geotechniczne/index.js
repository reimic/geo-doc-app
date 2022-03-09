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

const data = [
    {litology: "żwiry i pospółki", cohesion: "niespoiste", display_name: "żwiry i pospółki", parameters: [{ID: 0.20, Fi: 36.00, E0: 50000, C: 0.00, Delta: 0.7800, M0: 64103}, {ID: 0.21, Fi: 36.08, E0: 50769, C: 0.00, Delta: 0.7815, M0: 64961}, {ID: 0.22, Fi: 36.15, E0: 51538, C: 0.00, Delta: 0.7831, M0: 65815}, {ID: 0.23, Fi: 36.23, E0: 52308, C: 0.00, Delta: 0.7846, M0: 66667}, {ID: 0.24, Fi: 36.31, E0: 53077, C: 0.00, Delta: 0.7862, M0: 67515}, {ID: 0.25, Fi: 36.38, E0: 53846, C: 0.00, Delta: 0.7877, M0: 68359}, {ID: 0.26, Fi: 36.46, E0: 54615, C: 0.00, Delta: 0.7892, M0: 69201}, {ID: 0.27, Fi: 36.54, E0: 55385, C: 0.00, Delta: 0.7908, M0: 70039}, {ID: 0.28, Fi: 36.62, E0: 56154, C: 0.00, Delta: 0.7923, M0: 70874}, {ID: 0.29, Fi: 36.69, E0: 56923, C: 0.00, Delta: 0.7938, M0: 71705}, {ID: 0.30, Fi: 36.77, E0: 57692, C: 0.00, Delta: 0.7954, M0: 72534}, {ID: 0.31, Fi: 36.85, E0: 58462, C: 0.00, Delta: 0.7969, M0: 73359}, {ID: 0.32, Fi: 36.92, E0: 59231, C: 0.00, Delta: 0.7985, M0: 74181}, {ID: 0.33, Fi: 37.00, E0: 60000, C: 0.00, Delta: 0.8000, M0: 75000}, {ID: 0.34, Fi: 37.09, E0: 61176, C: 0.00, Delta: 0.8029, M0: 76198}, {ID: 0.35, Fi: 37.18, E0: 62353, C: 0.00, Delta: 0.8057, M0: 77388}, {ID: 0.36, Fi: 37.26, E0: 63529, C: 0.00, Delta: 0.8086, M0: 78570}, {ID: 0.37, Fi: 37.35, E0: 64706, C: 0.00, Delta: 0.8114, M0: 79743}, {ID: 0.38, Fi: 37.44, E0: 65882, C: 0.00, Delta: 0.8143, M0: 80908}, {ID: 0.39, Fi: 37.53, E0: 67059, C: 0.00, Delta: 0.8171, M0: 82065}, {ID: 0.40, Fi: 37.62, E0: 68235, C: 0.00, Delta: 0.8200, M0: 83214}, {ID: 0.41, Fi: 37.71, E0: 69412, C: 0.00, Delta: 0.8210, M0: 84545}, {ID: 0.42, Fi: 37.79, E0: 70588, C: 0.00, Delta: 0.8220, M0: 85874}, {ID: 0.43, Fi: 37.88, E0: 71765, C: 0.00, Delta: 0.8230, M0: 87199}, {ID: 0.44, Fi: 37.97, E0: 72941, C: 0.00, Delta: 0.8240, M0: 88521}, {ID: 0.45, Fi: 38.06, E0: 74118, C: 0.00, Delta: 0.8250, M0: 89840}, {ID: 0.46, Fi: 38.15, E0: 75294, C: 0.00, Delta: 0.8260, M0: 91155}, {ID: 0.47, Fi: 38.24, E0: 76471, C: 0.00, Delta: 0.8270, M0: 92467}, {ID: 0.48, Fi: 38.32, E0: 77647, C: 0.00, Delta: 0.8280, M0: 93777}, {ID: 0.49, Fi: 38.41, E0: 78824, C: 0.00, Delta: 0.8290, M0: 95083}, {ID: 0.50, Fi: 38.50, E0: 80000, C: 0.00, Delta: 0.8300, M0: 96386}, {ID: 0.51, Fi: 38.59, E0: 81176, C: 0.00, Delta: 0.8318, M0: 97595}, {ID: 0.52, Fi: 38.68, E0: 82353, C: 0.00, Delta: 0.8335, M0: 98800}, {ID: 0.53, Fi: 38.76, E0: 83529, C: 0.00, Delta: 0.8353, M0: 100000}, {ID: 0.54, Fi: 38.85, E0: 84706, C: 0.00, Delta: 0.8371, M0: 101195}, {ID: 0.55, Fi: 38.94, E0: 85882, C: 0.00, Delta: 0.8388, M0: 102384}, {ID: 0.56, Fi: 39.03, E0: 87059, C: 0.00, Delta: 0.8406, M0: 103569}, {ID: 0.57, Fi: 39.12, E0: 88235, C: 0.00, Delta: 0.8424, M0: 104749}, {ID: 0.58, Fi: 39.21, E0: 89412, C: 0.00, Delta: 0.8441, M0: 105923}, {ID: 0.59, Fi: 39.29, E0: 90588, C: 0.00, Delta: 0.8459, M0: 107093}, {ID: 0.60, Fi: 39.38, E0: 91765, C: 0.00, Delta: 0.8476, M0: 108258}, {ID: 0.61, Fi: 39.47, E0: 92941, C: 0.00, Delta: 0.8494, M0: 109418}, {ID: 0.62, Fi: 39.56, E0: 94118, C: 0.00, Delta: 0.8512, M0: 110574}, {ID: 0.63, Fi: 39.65, E0: 95294, C: 0.00, Delta: 0.8529, M0: 111724}, {ID: 0.64, Fi: 39.74, E0: 96471, C: 0.00, Delta: 0.8547, M0: 112870}, {ID: 0.65, Fi: 39.82, E0: 97647, C: 0.00, Delta: 0.8565, M0: 114011}, {ID: 0.66, Fi: 39.91, E0: 98824, C: 0.00, Delta: 0.8582, M0: 115147}, {ID: 0.67, Fi: 40.00, E0: 100000, C: 0.00, Delta: 0.8600, M0: 116279}, {ID: 0.68, Fi: 40.06, E0: 101515, C: 0.03, Delta: 0.8633, M0: 117585}, {ID: 0.69, Fi: 40.12, E0: 103030, C: 0.06, Delta: 0.8667, M0: 118881}, {ID: 0.70, Fi: 40.18, E0: 104545, C: 0.09, Delta: 0.8700, M0: 120167}, {ID: 0.71, Fi: 40.24, E0: 106061, C: 0.12, Delta: 0.8733, M0: 121443}, {ID: 0.72, Fi: 40.30, E0: 107576, C: 0.15, Delta: 0.8767, M0: 122710}, {ID: 0.73, Fi: 40.36, E0: 109091, C: 0.18, Delta: 0.8800, M0: 123967}, {ID: 0.74, Fi: 40.42, E0: 110606, C: 0.21, Delta: 0.8833, M0: 125214}, {ID: 0.75, Fi: 40.48, E0: 112121, C: 0.24, Delta: 0.8867, M0: 126452}, {ID: 0.76, Fi: 40.55, E0: 113636, C: 0.27, Delta: 0.8900, M0: 127681}, {ID: 0.77, Fi: 40.61, E0: 115152, C: 0.30, Delta: 0.8933, M0: 128901}, {ID: 0.78, Fi: 40.67, E0: 116667, C: 0.33, Delta: 0.8967, M0: 130112}, {ID: 0.79, Fi: 40.73, E0: 118182, C: 0.36, Delta: 0.9000, M0: 131313}, {ID: 0.80, Fi: 40.79, E0: 119697, C: 0.39, Delta: 0.9033, M0: 132506}, {ID: 0.81, Fi: 40.85, E0: 121212, C: 0.42, Delta: 0.9067, M0: 133690}, {ID: 0.82, Fi: 40.91, E0: 122727, C: 0.45, Delta: 0.9100, M0: 134865}, {ID: 0.83, Fi: 40.97, E0: 124242, C: 0.48, Delta: 0.9133, M0: 136032}, {ID: 0.84, Fi: 41.03, E0: 125758, C: 0.52, Delta: 0.9167, M0: 137190}, {ID: 0.85, Fi: 41.09, E0: 127273, C: 0.55, Delta: 0.9200, M0: 138340}, {ID: 0.86, Fi: 41.15, E0: 128788, C: 0.58, Delta: 0.9233, M0: 139481}, {ID: 0.87, Fi: 41.21, E0: 130303, C: 0.61, Delta: 0.9267, M0: 140615}, {ID: 0.88, Fi: 41.27, E0: 131818, C: 0.64, Delta: 0.9300, M0: 141740}, {ID: 0.89, Fi: 41.33, E0: 133333, C: 0.67, Delta: 0.9333, M0: 142857}, {ID: 0.90, Fi: 41.39, E0: 134848, C: 0.70, Delta: 0.9367, M0: 143966}, {ID: 0.91, Fi: 41.45, E0: 136364, C: 0.73, Delta: 0.9400, M0: 145068}, {ID: 0.92, Fi: 41.52, E0: 137879, C: 0.76, Delta: 0.9433, M0: 146161}, {ID: 0.93, Fi: 41.58, E0: 139394, C: 0.79, Delta: 0.9467, M0: 147247}, {ID: 0.94, Fi: 41.64, E0: 140909, C: 0.82, Delta: 0.9500, M0: 148325}, {ID: 0.95, Fi: 41.70, E0: 142424, C: 0.85, Delta: 0.9533, M0: 149396}, {ID: 0.96, Fi: 41.76, E0: 143939, C: 0.88, Delta: 0.9567, M0: 150459}, {ID: 0.97, Fi: 41.82, E0: 145455, C: 0.91, Delta: 0.9600, M0: 151515}, {ID: 0.98, Fi: 41.88, E0: 146970, C: 0.94, Delta: 0.9633, M0: 152564}, {ID: 0.99, Fi: 41.94, E0: 148485, C: 0.97, Delta: 0.9667, M0: 153605}, {ID: 1.00, Fi: 42.00, E0: 150000, C: 1.00, Delta: 0.9700, M0: 154639}
  ]},
    {litology: "piaski grube i średnie", cohesion: "niespoiste", display_name: "piaski grube i średnie", parameters: [{ID: 0.20, Fi: 33.00, E0: 30000, C: 0.00, Delta: 0.78, M0: 38462}, {ID: 0.21, Fi: 33.08, E0: 30769, C: 0.00, Delta: 0.78, M0: 39370}, {ID: 0.22, Fi: 33.15, E0: 31538, C: 0.00, Delta: 0.78, M0: 40275}, {ID: 0.23, Fi: 33.23, E0: 32308, C: 0.00, Delta: 0.78, M0: 41176}, {ID: 0.24, Fi: 33.31, E0: 33077, C: 0.00, Delta: 0.79, M0: 42074}, {ID: 0.25, Fi: 33.38, E0: 33846, C: 0.00, Delta: 0.79, M0: 42969}, {ID: 0.26, Fi: 33.46, E0: 34615, C: 0.00, Delta: 0.79, M0: 43860}, {ID: 0.27, Fi: 33.54, E0: 35385, C: 0.00, Delta: 0.79, M0: 44747}, {ID: 0.28, Fi: 33.62, E0: 36154, C: 0.00, Delta: 0.79, M0: 45631}, {ID: 0.29, Fi: 33.69, E0: 36923, C: 0.00, Delta: 0.79, M0: 46512}, {ID: 0.30, Fi: 33.77, E0: 37692, C: 0.00, Delta: 0.80, M0: 47389}, {ID: 0.31, Fi: 33.85, E0: 38462, C: 0.00, Delta: 0.80, M0: 48263}, {ID: 0.32, Fi: 33.92, E0: 39231, C: 0.00, Delta: 0.80, M0: 49133}, {ID: 0.33, Fi: 34.00, E0: 40000, C: 0.00, Delta: 0.80, M0: 50000}, {ID: 0.34, Fi: 34.09, E0: 40588, C: 0.03, Delta: 0.80, M0: 50555}, {ID: 0.35, Fi: 34.18, E0: 41176, C: 0.06, Delta: 0.81, M0: 51106}, {ID: 0.36, Fi: 34.26, E0: 41765, C: 0.09, Delta: 0.81, M0: 51652}, {ID: 0.37, Fi: 34.35, E0: 42353, C: 0.12, Delta: 0.81, M0: 52196}, {ID: 0.38, Fi: 34.44, E0: 42941, C: 0.15, Delta: 0.81, M0: 52735}, {ID: 0.39, Fi: 34.53, E0: 43529, C: 0.18, Delta: 0.82, M0: 53270}, {ID: 0.40, Fi: 34.62, E0: 44118, C: 0.21, Delta: 0.82, M0: 53802}, {ID: 0.41, Fi: 34.71, E0: 44706, C: 0.24, Delta: 0.82, M0: 54453}, {ID: 0.42, Fi: 34.79, E0: 45294, C: 0.26, Delta: 0.82, M0: 55102}, {ID: 0.43, Fi: 34.88, E0: 45882, C: 0.29, Delta: 0.82, M0: 55750}, {ID: 0.44, Fi: 34.97, E0: 46471, C: 0.32, Delta: 0.82, M0: 56396}, {ID: 0.45, Fi: 35.06, E0: 47059, C: 0.35, Delta: 0.83, M0: 57041}, {ID: 0.46, Fi: 35.15, E0: 47647, C: 0.38, Delta: 0.83, M0: 57684}, {ID: 0.47, Fi: 35.24, E0: 48235, C: 0.41, Delta: 0.83, M0: 58326}, {ID: 0.48, Fi: 35.32, E0: 48824, C: 0.44, Delta: 0.83, M0: 58966}, {ID: 0.49, Fi: 35.41, E0: 49412, C: 0.47, Delta: 0.83, M0: 59604}, {ID: 0.50, Fi: 35.50, E0: 50000, C: 0.50, Delta: 0.83, M0: 60241}, {ID: 0.51, Fi: 35.59, E0: 50588, C: 0.53, Delta: 0.83, M0: 60820}, {ID: 0.52, Fi: 35.68, E0: 51176, C: 0.56, Delta: 0.83, M0: 61397}, {ID: 0.53, Fi: 35.76, E0: 51765, C: 0.59, Delta: 0.84, M0: 61972}, {ID: 0.54, Fi: 35.85, E0: 52353, C: 0.62, Delta: 0.84, M0: 62544}, {ID: 0.55, Fi: 35.94, E0: 52941, C: 0.65, Delta: 0.84, M0: 63114}, {ID: 0.56, Fi: 36.03, E0: 53529, C: 0.68, Delta: 0.84, M0: 63681}, {ID: 0.57, Fi: 36.12, E0: 54118, C: 0.71, Delta: 0.84, M0: 64246}, {ID: 0.58, Fi: 36.21, E0: 54706, C: 0.74, Delta: 0.84, M0: 64808}, {ID: 0.59, Fi: 36.29, E0: 55294, C: 0.76, Delta: 0.85, M0: 65369}, {ID: 0.60, Fi: 36.38, E0: 55882, C: 0.79, Delta: 0.85, M0: 65926}, {ID: 0.61, Fi: 36.47, E0: 56471, C: 0.82, Delta: 0.85, M0: 66482}, {ID: 0.62, Fi: 36.56, E0: 57059, C: 0.85, Delta: 0.85, M0: 67035}, {ID: 0.63, Fi: 36.65, E0: 57647, C: 0.88, Delta: 0.85, M0: 67586}, {ID: 0.64, Fi: 36.74, E0: 58235, C: 0.91, Delta: 0.85, M0: 68135}, {ID: 0.65, Fi: 36.82, E0: 58824, C: 0.94, Delta: 0.86, M0: 68681}, {ID: 0.66, Fi: 36.91, E0: 59412, C: 0.97, Delta: 0.86, M0: 69225}, {ID: 0.67, Fi: 37.00, E0: 60000, C: 1.00, Delta: 0.86, M0: 69767}, {ID: 0.68, Fi: 37.06, E0: 60909, C: 1.03, Delta: 0.86, M0: 70551}, {ID: 0.69, Fi: 37.12, E0: 61818, C: 1.06, Delta: 0.87, M0: 71329}, {ID: 0.70, Fi: 37.18, E0: 62727, C: 1.09, Delta: 0.87, M0: 72100}, {ID: 0.71, Fi: 37.24, E0: 63636, C: 1.12, Delta: 0.87, M0: 72866}, {ID: 0.72, Fi: 37.30, E0: 64545, C: 1.15, Delta: 0.88, M0: 73626}, {ID: 0.73, Fi: 37.36, E0: 65455, C: 1.18, Delta: 0.88, M0: 74380}, {ID: 0.74, Fi: 37.42, E0: 66364, C: 1.21, Delta: 0.88, M0: 75129}, {ID: 0.75, Fi: 37.48, E0: 67273, C: 1.24, Delta: 0.89, M0: 75871}, {ID: 0.76, Fi: 37.55, E0: 68182, C: 1.27, Delta: 0.89, M0: 76609}, {ID: 0.77, Fi: 37.61, E0: 69091, C: 1.30, Delta: 0.89, M0: 77341}, {ID: 0.78, Fi: 37.67, E0: 70000, C: 1.33, Delta: 0.90, M0: 78067}, {ID: 0.79, Fi: 37.73, E0: 70909, C: 1.36, Delta: 0.90, M0: 78788}, {ID: 0.80, Fi: 37.79, E0: 71818, C: 1.39, Delta: 0.90, M0: 79504}, {ID: 0.81, Fi: 37.85, E0: 72727, C: 1.42, Delta: 0.91, M0: 80214}, {ID: 0.82, Fi: 37.91, E0: 73636, C: 1.45, Delta: 0.91, M0: 80919}, {ID: 0.83, Fi: 37.97, E0: 74545, C: 1.48, Delta: 0.91, M0: 81619}, {ID: 0.84, Fi: 38.03, E0: 75455, C: 1.52, Delta: 0.92, M0: 82314}, {ID: 0.85, Fi: 38.09, E0: 76364, C: 1.55, Delta: 0.92, M0: 83004}, {ID: 0.86, Fi: 38.15, E0: 77273, C: 1.58, Delta: 0.92, M0: 83689}, {ID: 0.87, Fi: 38.21, E0: 78182, C: 1.61, Delta: 0.93, M0: 84369}, {ID: 0.88, Fi: 38.27, E0: 79091, C: 1.64, Delta: 0.93, M0: 85044}, {ID: 0.89, Fi: 38.33, E0: 80000, C: 1.67, Delta: 0.93, M0: 85714}, {ID: 0.90, Fi: 38.39, E0: 80909, C: 1.70, Delta: 0.94, M0: 86380}, {ID: 0.91, Fi: 38.45, E0: 81818, C: 1.73, Delta: 0.94, M0: 87041}, {ID: 0.92, Fi: 38.52, E0: 82727, C: 1.76, Delta: 0.94, M0: 87697}, {ID: 0.93, Fi: 38.58, E0: 83636, C: 1.79, Delta: 0.95, M0: 88348}, {ID: 0.94, Fi: 38.64, E0: 84545, C: 1.82, Delta: 0.95, M0: 88995}, {ID: 0.95, Fi: 38.70, E0: 85455, C: 1.85, Delta: 0.95, M0: 89638}, {ID: 0.96, Fi: 38.76, E0: 86364, C: 1.88, Delta: 0.96, M0: 90276}, {ID: 0.97, Fi: 38.82, E0: 87273, C: 1.91, Delta: 0.96, M0: 90909}, {ID: 0.98, Fi: 38.88, E0: 88182, C: 1.94, Delta: 0.96, M0: 91538}, {ID: 0.99, Fi: 38.94, E0: 89091, C: 1.97, Delta: 0.97, M0: 92163}, {ID: 1.00, Fi: 39.00, E0: 90000, C: 2.00, Delta: 0.97, M0: 92784}
  ]},
    {litology: "piaski drobne i pylaste", cohesion: "niespoiste", display_name: "piaski drobne i pylaste", parameters: []}
  
  ]

// Data: position in array parallels to ID / IL parameter. 
// Relation is fixed on equation:
// a = ((parameterInputField * 100) / 20) -1, a - position in array for gruntyNiespoiste category
// b = (parameterInputField * 100), b - position in array for gruntySpoiste category

/* functions */

function generateOptions(cohesion, parameter, minRange, maxRange) {
    litologySelect.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        if (data[i].cohesion === cohesion) {
            let Opt= new Option (data[i].litology,i)
            litologySelect.add(Opt)
            console.log(data[i].litology)
        }
    }
    parameterInputFieldLabel.textContent = `Wprowadź stopień ${parameter}:`
    parameterInputFieldRange.innerHTML = `Wartość w przedziale:<br>od ${minRange}  do ${maxRange}`
}


function showParameters(param) {
    let litologySelectValue = litologySelect.value
    let ID = parseFloat(parameterInputField.value)*100/20-1
    let IL = parseFloat(parameterInputField.value)*100

        outputC.innerHTML = `<p> Spójność gruntu c [kPa]</p>
        <h3>${data[litologySelectValue].parameters[param].C}</h3>`

        outputFi.innerHTML = `<p> Kąt tarcia wewnętrznego f [o]</p>
        <h3>${data[litologySelectValue].parameters[param].Fi}</h3>`

        outputM0.innerHTML = `<p> Edometryczny moduł ściśliwości pierwotnej M0 [kPa]</p>
        <h3>${data[litologySelectValue].parameters[param].M0}</h3>`

        outputE0.innerHTML = `<p> Edometryczny moduł odkształcenia pierwotnego E0 [kPa]</p>
        <h3>${data[litologySelectValue].parameters[param].E0}</h3>` 
}

/* events */

buttonSpoisty.addEventListener("click", function(){
    generateOptions("spoiste", "plastyczności", 0.00, 0.75)
})

buttonNiespoisty.addEventListener("click", function(){
    generateOptions("niespoiste", "zagęszczenia", 0.20, 1.00)
})


buttonOblicz.addEventListener("click", function() {
    if (data[litologySelectValue].cohesion === "niespoiste") {
        showParameters(ID)
    } else {
        showParameters(IL)
    }
})
