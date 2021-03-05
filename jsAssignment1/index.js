let button = document.querySelector(".button")

button.addEventListener("click", calculate)

function calculate() {
    let radius = document.querySelector("#radius").value
    let height = document.querySelector("#height").value

    let calculate = Math.pow(radius,2) * 3.14 * height

    let result = document.querySelector("#result").value = calculate
}

