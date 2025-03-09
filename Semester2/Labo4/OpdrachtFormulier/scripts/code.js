const setup = () => {
    let range = document.getElementById("range");
    range.addEventListener("input", update);
    range.addEventListener("change", update);
    update();

    let color = document.getElementById("color");
    color.addEventListener("input", updateKleur);
    color.addEventListener("change", updateKleur);
    updateKleur();
}

const update = () => {
    let waardeResults = document.getElementsByClassName("range");
    let resultRange = document.getElementById("resultRange");
    resultRange.innerHTML = waardeResults[0].value;
}

const updateKleur = () => {
    let resultKleur = document.getElementsByClassName("color");
    let kleurHex = document.getElementById("kleurHex");
    kleurHex.textContent = resultKleur[0].value;
    kleurHex.style.color = kleurHex.textContent;
}

window.addEventListener("load", setup);