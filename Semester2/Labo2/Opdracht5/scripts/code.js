const setup = () => {
    let btnWijzigen = document.getElementById("btnWijzigen");
    btnWijzigen.addEventListener("click", tekstWijzigen);
}

const tekstWijzigen = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}
window.addEventListener("load", setup);