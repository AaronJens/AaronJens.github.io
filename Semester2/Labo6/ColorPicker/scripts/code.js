const initialize = () => {
    let sliders = document.getElementsByClassName("slider");
    let btnSave = document.getElementById("btnSave");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();
    btnSave.addEventListener("click", save);
}

const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

}
const save = () => {
    let swatch = document.getElementById("swatch").style.backgroundColor;
    let maakDiv = document.createElement("div");
    maakDiv.setAttribute("class", "saveSwatch");
    maakDiv.style.backgroundColor = swatch;
    document.body.appendChild(maakDiv);

    let btnX = document.createElement("button");
    btnX.textContent = "X";
    maakDiv.appendChild(btnX);
    btnX.style.float = "right";
    console.log(maakDiv.nodeType);
    btnX.addEventListener("click", verwijder);
    maakDiv.addEventListener("click", zetKleurOver);
}


const zetKleurOver = (event) => {
    let swatch = document.getElementById("swatch");
    let kleurbepalen = event.currentTarget.style.backgroundColor;
    swatch.style.backgroundColor = kleurbepalen;

    console.log(swatch);
    let rgbArray = kleurbepalen.slice(4, -1).split(",");
    let red = rgbArray[0];
    let green = rgbArray[1];
    let blue = rgbArray[2];

    document.getElementById("lblRed").textContent = red;
    document.getElementById("lblGreen").textContent = green;
    document.getElementById("lblBlue").textContent = blue;
    document.getElementById("sldRed").value = parseInt(red);
    document.getElementById("sldGreen").value = parseInt(green);
    document.getElementById("sldBlue").value = parseInt(blue);
}
const verwijder = (event) => {
    event.currentTarget.parentNode.remove();
    event.stopPropagation();
}

window.addEventListener("load", initialize);