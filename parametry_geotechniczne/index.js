/* variables */

const parChar = document.getElementById("par-char")
const parCharLbl = document.getElementById("par-char-lbl")
const rockType = document.getElementById("rockType")
const litology = document.getElementById("litology")
const grNsp = ["piasek drobny", "piasek średni", "piasek gruby", "żwir", "pospółka"]
const grSp = ["piasek gliniasty", "pył", "glina pylasta", "glina piaszczysta", "glina piaszczysta zwięzła", "glina pylasta zwięzła", "ił"]

/* functions */

function createLitologyOpt() {
    if (rockType.value === "niespoisty") {
        for (gr of grNsp) {
            let grOpt = new Option (gr,gr)
            litology.add(grOpt)
            console.log(gr)
        }
    } else {
        for (gr of grSp) {
            let grOpt = new Option (gr,gr)
            litology.add(grOpt)
            console.log(gr)
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

/* initial setting */

changeRockType()
createLitologyOpt()

/* events */

rockType.addEventListener("change", function() {
    changeRockType()
    clearLitologyOpt()
    createLitologyOpt()
})