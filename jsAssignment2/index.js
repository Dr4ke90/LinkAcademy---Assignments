let button = document.querySelector("#button")
button.addEventListener("click", calculate)



function calculate () {
    let nr1 = document.querySelector(".nr1").value
    let nr2 = document.querySelector(".nr2").value
    let opr = document.querySelector(".opr").value
    let result = document.querySelector("#result")

    if(opr == "+") {
        let sum = parseInt(nr1) + parseInt(nr2)
        result.value = sum
    } else if(opr == "-") {
        let sum = parseInt(nr1) - parseInt(nr2)
        result.value = sum
    } else if (opr == "*") {
        let sum = parseInt(nr1) * parseInt(nr2)
        result = sum
    } else if (opr.value == "/") {
        let sum = parseInt(nr1) / parseInt(nr2)
        result.value = sum
    }

}