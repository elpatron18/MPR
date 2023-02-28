console.log("Hallo Welt")

document.addEventListener("DOMContentLoaded", ()=> {
    console.log("Hello World again");
    console.log(document.getElementById("a1").innerHTML)
    let ausgabe = document.getElementById("a1");
    console.log(ausgabe)
    console.log(ausgabe.innerHTML)
    ausgabe.innerHTML += " <br> und das finde ich toll"
    console.log(ausgabe.innerHTML);
    let container = document.getElementsByTagName("div")
    console.log(container);
/*
    alert(container[0].id);
    alert(container[0].innerHTML);
    alert(container[0].innerText);
    alert(container[0].offsetHeight); */

    ausgabe.innerHTML +=
        " <br>" +
        "<br>" +
        " Das ist ein <em>Test</em>" +
        "<br>"

    for (i = 0; i < container.length; i++) {
        ausgabe.innerHTML += "<br> Das " + (i+1) + "te Element hat die id " + container[i].id;
    }

    let x1=document.getElementById("a2");
    let y1=x1.childNodes[1].childNodes[0];
    y1.nodeValue="Versuch";

    x1.style.fontSize="1.8em";
    x1.style.color = "#b80926";

    let b1 = document.getElementById("b1");
    let content = document.createTextNode("Hier steht der Inhalt von B1");
    let paragraph = document.createElement("p");
    paragraph.appendChild(content);
    b1.appendChild(paragraph);

})