let z1 = document.getElementById("z1");
let z2 = document.getElementById("z2");
let berechnen = document.getElementById("berechnen")
let erg = document.getElementById("erg")

berechnen.addEventListener("click", () => {
    erg.innerText = (parseInt(z1.value) + parseInt(z2.value));
})
