const setup = () => {
    let btnToon = document.getElementById("btnToon");
    btnToon.addEventListener("click", toonTrigram);
}

const getTrigram = (tekst) => {
    let result = [];
    let trigram;

    for (let i = 0; i < tekst.length - 3; i++) {
        trigram = tekst.slice(i, i + 3);
        result.push(trigram);
    }
    return result;
}

const toonTrigram = () => {
    let tekst = document.getElementById("txtInput").value;
    let listTrigrams = document.getElementById("listTrigrams");
    let trigrams = getTrigram(tekst);
    let output = "";

    for (let i = 0; i < trigrams.length; i++) {
        output += "<li>" + trigrams[i] + "</li>";
        console.log(trigrams[i]);
    }
    listTrigrams.innerHTML = output;
}

window.addEventListener("load", setup);