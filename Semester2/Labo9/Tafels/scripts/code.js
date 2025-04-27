const verwijderAlleChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const maakTafel = (getal) => {
    let tafelDiv = document.createElement("div");
    tafelDiv.className = "tafel";

    let now = new Date();
    let tijd = now.toLocaleTimeString('nl-BE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    let header = document.createElement("div");
    header.className = "tafel-header";
    header.innerHTML = `Tafel van ${getal} aangemaakt op: ${tijd}`;
    tafelDiv.appendChild(header);

    for (let i = 1; i <= 10; i++) {
        let rij = document.createElement("div");
        rij.className = "tafel-row";
        rij.innerText = `${getal} x ${i} = ${getal * i}`;
        tafelDiv.appendChild(rij);
    }

    return tafelDiv;
}

const hertekenTafels = () => {
    let container = document.getElementById("tafelsContainer");
    verwijderAlleChildren(container);
    for (let i = 0; i < tafels.length; i++) {
        let tafel = maakTafel(tafels[i]);
        container.appendChild(tafel);
    }
}

let tafels = [];

const initialize = () => {
    document.getElementById("lblTafel").addEventListener("click", () => {
        document.getElementById("txtGetal").focus();
    });

    document.getElementById("btnGo").addEventListener("click", () => {
        let input = document.getElementById("txtGetal").value.trim();
        if (isNaN(input) || input === "") {
            alert("Gelieve een geldig getal in te voeren.");
        } else {
            tafels.push(Number(input));
            hertekenTafels();
            document.getElementById("txtGetal").value = "";
        }
    });
}

window.addEventListener("load", initialize);
