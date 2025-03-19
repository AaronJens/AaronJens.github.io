const setup = () => {
    let btn = document.getElementById("btnMaakp");
    btn.addEventListener("click", createP);

}

const createP = () => {
    let div = document.getElementById("myDIV");
    let pElement = document.createElement("p");
    div.appendChild(pElement);
    pElement.textContent = "Hier werd een p element aangemaakt";

}
window.addEventListener("load", setup);