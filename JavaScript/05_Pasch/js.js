let bild1 = document.getElementById("Bild1")
let bild2 = document.getElementById("Bild2")
let neu = document.getElementById("neu")
let gleich = document.getElementById("Gleich")

function makeRandomPic() {
    let rand = Math.floor(Math.random() * 10)
    bild1.style.backgroundImage = "url('Bilder/"+rand+".png')"
    rand = Math.floor(Math.random() * 10)
    bild2.style.backgroundImage = "url('Bilder/"+rand+".png')"
}
neu.addEventListener("click", ()=> {
    makeRandomPic();
    if (bild1.style.backgroundImage === bild2.style.backgroundImage) {
        gleich.style.backgroundImage = "url(Bilder/haken.png)";
    }
    else gleich.style.backgroundImage = "url(Bilder/kreuz.png)";
})