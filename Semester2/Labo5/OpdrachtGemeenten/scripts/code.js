const setup = () => {
    let gemeenten = [];
    let stop = false;
    while (!stop) {
        let input = prompt("Geef een gemeente in");
        stop = (input == null || input.trim().toLowerCase() == "stop");
        if (!stop) {
            gemeenten.push(input);
        }
    }
    gemeenten.sort(compare);
    voegGemeentenToe(gemeenten);
}

const compare = (a, b) => {
    return a.localeCompare(b);
}

const voegGemeentenToe = (gemeenten) => {
    let div = document.getElementById("gemeenten");
    let htmlTekst = "<select>";
    for (let i = 0; i < gemeenten.length; i++) {
        htmlTekst += "<option>" + gemeenten[i] + "</option>";
        div.innerHTML = htmlTekst;
    }
}

window.addEventListener("load", setup);