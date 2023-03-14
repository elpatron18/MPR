let z1 = document.getElementById("z1");
let z2 = document.getElementById("z2");
let berechnen = document.getElementById("berechnen")
let erg = document.getElementById("erg")

function addieren(x1, x2) {
    let wert1 = parseInt(x1.value);
    let wert2 = parseInt(x2.value)

    erg.innerHTML = ;
}
berechnen.addEventListener("click", () => {
    erg.innerText = parseInt(z1.input) + parseInt(z2.input);
})
