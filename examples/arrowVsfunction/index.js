function init() {

    const button = document.getElementById("clickMe")

    button.addEventListener("click", () => {
        console.log(this) // window
    })

    button.addEventListener("click", function () {
        console.log(this) // button
    })

}


init();