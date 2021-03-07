let cylinder = document.querySelector(".cylinder")
cylinder.addEventListener("click", cylinderVolume)

function cylinderVolume() {
    let radius = document.querySelector("#radius").value
    let height = document.querySelector("#height").value

    let calculate = Math.pow(radius,2) * 3.14 * height

    document.querySelector("#result").value = calculate
}
