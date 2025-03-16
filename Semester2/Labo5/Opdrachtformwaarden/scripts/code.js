const setup = () => {
    let btnResultaat = document.getElementById("btnResultaat")
    btnResultaat.addEventListener("click", toonResultaat);
}

const toonResultaat = () => {
    let cbkRoker = document.getElementById("cbkRoker");
    let moedertaal = document.getElementsByName("moedertaal");
    let buurlandIndex = document.getElementById("optionLand").selectedIndex;
    let buurlandOptie = document.getElementById("optionLand").options;
    let bestellingen = document.getElementById("optionBestelling").options;
    if (cbkRoker.checked) {
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }

    for (let i = 0; i < moedertaal.length; i++) {
        if (moedertaal[i].checked) {
            console.log("moedertaal is " + moedertaal[i].value);
        }
    }

    console.log("favoriete buurland is " + buurlandOptie[buurlandIndex].text);

    let bestelling = "bestelling bestaat uit ";
    for (let i = 0; i < bestellingen.length; i++) {
        if (bestellingen[i].selected) {
            bestelling += bestellingen[i].text + " ";
        }
    }
    console.log(bestelling);
}
window.addEventListener("load", setup);