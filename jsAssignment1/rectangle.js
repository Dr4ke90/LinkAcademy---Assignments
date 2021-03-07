let rectangle = document.querySelector(".rectangle")
rectangle.addEventListener("click", rectangleAria)

function rectangleAria () {
    let lenght = document.querySelector("#length").value
    let width = document.querySelector("#width").value

    let calculate = lenght * width

   document.querySelector("#result").value = calculate
}

