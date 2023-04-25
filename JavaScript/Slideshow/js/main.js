"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const current = document.querySelector("#current")
    const imgs = document.querySelectorAll(".imgs img")
    let iIndex = 0;


    //Wo ist der Unterschied? Warum können sie im ersten Fall QuerySelector verwenden
    // Weil man # verwendet

    imgs[0].style.opacity = 0.4;

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", () => {
            changePicture(imgs[i])
            iIndex = i;
        })
    }

    function changePicture(myPicture) {
        current.src = myPicture.src;

        current.classList.add("fade-in")

        setTimeout(() => current.classList.remove("fade-in"), 500)

        imgs.forEach(img => img.style.opacity = 1)
        myPicture.style.opacity = 0.4
    }

    let back = document.querySelector("#back")
    let fwrd = document.querySelector("#forward")

    fwrd.addEventListener("click", () => {
        if (iIndex < imgs.length - 1) {
            iIndex++;
            changePicture(imgs[iIndex])
        }
        else {
            iIndex = 0;
            changePicture(imgs[iIndex])
        }
    })

    back.addEventListener("click", () => {
        if (iIndex === 0) {
            iIndex = imgs.length - 1 ;
            changePicture(imgs[iIndex])
        }
        else {
            iIndex--;
            changePicture(imgs[iIndex])
        }
    })


})


