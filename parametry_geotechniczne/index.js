/* variables */

const parChar = document.getElementById("par-char")
const parCharLbl = document.getElementById("par-char-lbl")
const rockType = document.getElementById("rockType")
const litology = document.getElementById("litology")
const submitBtn = document.getElementById("submit-btn")
const form = document.getElementsByClassName("form")
const gruntyNiespoiste = ["piasek pylasty","piasek drobny", "piasek średni", "piasek gruby", "żwir", "pospółka"]
const gruntySpoiste = ["piasek gliniasty", "pył piaszczysty", "pył", "glina pylasta", "glina piaszczysta", "glina", "glina piaszczysta zwięzła", "glina pylasta zwięzła", "glina zwięzła","ił"]
const E0 = {0.20: 50000, 0.21: 50769, 0.22: 51538, 0.23: 52307, 0.24: 53076, 0.25: 53846, 0.26: 54615, 0.27: 55384, 0.28: 56153, 0.29: 56923, 0.30: 57692, 0.31: 58461, 0.32: 59230, 0.33: 60000, 0.34: 61176, 0.35: 62352, 0.36: 63529, 0.37: 64705, 0.38: 65882, 0.39: 67058, 0.40: 68235, 0.41: 69411, 0.42: 70588, 0.43: 71764, 0.44: 72941, 0.45: 74117, 0.46: 75294, 0.47: 76470, 0.48: 77647, 0.49: 78823, 0.50: 79999, 0.51: 81176, 0.52: 82352, 0.53: 83529, 0.54: 84705, 0.55: 85882, 0.56: 87058, 0.57: 88235, 0.58: 89411, 0.59: 90588, 0.60: 91764, 0.61: 92941, 0.62: 94117, 0.63: 95294, 0.64: 96470, 0.65: 97647, 0.66: 98823, 0.67: 99999, 0.68: 101515, 0.69: 103030, 0.70: 104545, 0.71: 106060, 0.72: 107575, 0.73: 109090, 0.74: 110606, 0.75: 112121, 0.76: 113636, 0.77: 115151, 0.78: 116666, 0.79: 118181, 0.80: 119696, 0.81: 121212, 0.82: 122727, 0.83: 124242, 0.84: 125757, 0.85: 127272, 0.86: 128787, 0.87: 130303, 0.88: 131818, 0.89: 133333, 0.90: 134848, 0.91: 136363, 0.92: 137878, 0.93: 139393, 0.94: 140909, 0.95: 142424, 0.96: 143939, 0.97: 145454, 0.98: 146969, 0.99: 148484, 1.00: 150000}

/* functions */

function createLitologyOpt() {
    if (rockType.value === "niespoisty") {
        for (grunt of gruntyNiespoiste) {
            let gruntOpt = new Option (grunt,grunt)
            litology.add(gruntOpt)
            console.log(grunt)
        }
    } else {
        for (grunt of gruntySpoiste) {
            let gruntOpt = new Option (grunt,grunt)
            litology.add(gruntOpt)
            console.log(grunt)
        }
    }
}

function clearLitologyOpt() {
       litology.innerHTML = ""
}

function changeRockType() {
        if (rockType.value === "niespoisty") {
        parCharLbl.textContent = "Stopień zagęszczenia:"
    } else {
        parCharLbl.textContent = "Stopień plastyczności:"
    }

}

function addSelect() {


}

/* initial setting */

changeRockType()
createLitologyOpt()

/* events */

rockType.addEventListener("change", function() {
    changeRockType()
    clearLitologyOpt()
    createLitologyOpt()
})

submitBtn.addEventListener("click", function() {
    addSelect()
})
