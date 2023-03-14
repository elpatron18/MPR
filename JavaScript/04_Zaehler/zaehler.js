let num = document.getElementById("number")

let summe = 0;
num.innerHTML = summe

let hoch = document.getElementById("hoch")
let runter = document.getElementById("runter")
hoch.addEventListener("click", () => {
    if (summe < 10) {
        summe++;
        num.innerHTML = summe
        if (summe == 10) hoch.style.backgroundColor = "red";
    }
});

runter.addEventListener("click", () => {
    summe--;
    num.innerHTML = summe
});
