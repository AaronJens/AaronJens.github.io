const setup = () => {
    let bereken = document.getElementById("bereken");
    bereken.addEventListener("click", herbereken);
}

const herbereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btwwaarden = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementById("totaal");

    let tussentotaal = 0;
    for (let i = 0; i < prijzen.length; i++) {
        let prijs = parseInt(prijzen[i].innerHTML);
        let aantal = parseInt(aantallen[i].value);
        let btw = parseInt(btwwaarden[i].innerHTML);

        let uitkomst = (prijs * aantal) + ((prijs * aantal) * (btw / 100));
        subtotalen[i].innerHTML = uitkomst.toFixed(2) + " Eur";

        tussentotaal += uitkomst;
        totaal.innerHTML = tussentotaal + " Eur";

    }
}

window.addEventListener("load", setup);