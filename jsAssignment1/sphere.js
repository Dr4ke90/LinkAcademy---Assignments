let sphere = document.querySelector(".sphere")
sphere.addEventListener("click", sphereAria)

function sphereAria () {
    let radius = document.querySelector("#radius").value

    let calculate = 4 * 3.14 * Math.pow(radius,2)

   document.querySelector("#result").value = calculate
}

