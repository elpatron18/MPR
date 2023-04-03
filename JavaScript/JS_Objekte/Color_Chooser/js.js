let red = document.getElementById("rot")
let green = document.getElementById("gruen")
let blue = document.getElementById("blau")

let colorPreview = document.getElementById("preview")

let sliders = [red, blue, green]

sliders.forEach(slider => {
    slider.addEventListener("change", () => {
        let color = red.value + "," + green.value + "," + blue.value;
        colorPreview.style.backgroundColor = "rgb(" + color + ")";
    });
});