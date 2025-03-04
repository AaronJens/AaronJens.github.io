const setup = () => {
    document.getElementById("herbereken").addEventListener("click", update);
}

const update = () => {
    let prijs_elements = document.getElementsByClassName("prijs");
    let waarde_elements = document.getElementsByClassName("aantal");
    let btw_elements = document.getElementsByClassName("btw");
    let subtotal_elements = document.getElementsByClassName("subtotaal");
    let total_element = document.getElementById("totaal");

    let total = 0;

    for (let i=0; i < subtotal_elements.length; ++i) {
        let zonder_btw = parseFloat(prijs_elements[i].textContent) * waarde_elements[i].value ;
        let met_btw = zonder_btw + zonder_btw * parseFloat(btw_elements[i].textContent) / 100;
        subtotal_elements[i].textContent = met_btw.toFixed(2) + " Eur";
        total += met_btw;
    }

    total_element.innerText = total.toFixed(2) + " Eur";
}

window.addEventListener("load", setup);