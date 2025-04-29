const setup = () => {
    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", controleerZoekOpdracht);

    let lstHistory = JSON.parse(localStorage.getItem("aaron.be.history"));
    if(lstHistory){
        for (let i = 0; i < lstHistory.length; i++) {
            createCardAndAppend(lstHistory[i].title, lstHistory[i].commandoSuffix, lstHistory[i].url);
        }
    }
}


const controleerZoekOpdracht = () => {
    let txtCommando = document.getElementById("txtCommando");
    let command = txtCommando.value;
    let regix = command.match("\/[a-z]{1} [a-z]+");
    if (regix != null) {
        let commandPrefix = command.slice(0, 2);
        if (commandPrefix === '/g') {
            google(command.slice(3))
        } else if (commandPrefix === '/x') {
            twitter(command.slice(3))
        } else if (commandPrefix === '/y') {
            youtube(command.slice(3))
        } else if (commandPrefix === '/i') {
            instagram(command.slice(3))
        } else {
            alert("Unknown Command prefix");
        }
        txtCommando.value = "";
    } else {
        alert("Invalid command");
    }
}

const google = (commandoSuffix) => {
    let url = "https://www.google.com/search?q=" + commandoSuffix;
    window.open(url, '_blank');
    createCardAndAppend("Google", commandoSuffix, url);
    saveLocalStorage("Google", commandoSuffix, url);
}
const twitter = (commandoSuffix) => {
    let url = "https://www.x.com/hashtag/" + commandoSuffix;
    window.open(url, '_blank');
    createCardAndAppend("x", commandoSuffix, url);
    saveLocalStorage("x", commandoSuffix, url);
}
const youtube = (commandoSuffix) => {
    let url = "https://www.youtube.com/results?search_query=" + commandoSuffix;
    window.open(url, '_blank');
    createCardAndAppend("Youtube", commandoSuffix, url);
    saveLocalStorage("Youtube", commandoSuffix, url);
}
const instagram = (commandoSuffix) => {
    let url = "https://www.instagram.com/explore/tags/" + commandoSuffix;
    window.open(url, '_blank');
    createCardAndAppend("Instagram", commandoSuffix, url);
    saveLocalStorage("Instagram", commandoSuffix, url);
}

const createCardAndAppend = (title, commandoSuffix, url) => {
    let col4 = createElementWithClassName("div", "col-4");
    let card = createElementWithClassName("div", "card");
    card.classList.add(title.toLowerCase() + "-card");
    let cardBody = createElementWithClassName("div", "card-body");
    let cardTitle = createElementWithClassNameAndText("h5", "card-title", title);
    let cardText = createElementWithClassNameAndText("p", "card-text", commandoSuffix);
    let linkGo = createLinkButton(url);
    linkGo.classList.add(title.toLowerCase() + "-button");
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild(card);

    let row = document.querySelector("#resultContainer > .row");
    row.appendChild(col4);
}

const createLinkButton = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn btn-primary");
    linkGo.appendChild(document.createTextNode("Go!"));
    return linkGo;
}

const saveLocalStorage = (title, commandoSuffix, url) => {
    let lstHistory;
    let historyObject = {
        title: title,
        commandoSuffix: commandoSuffix,
        url: url
    }

    lstHistory = JSON.parse(localStorage.getItem("aaron.be.history"));
    if (!lstHistory) {
        lstHistory = [];
    }
    lstHistory.push(historyObject);

    localStorage.setItem("aaron.be.history", JSON.stringify(lstHistory));


}


const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
}
window.addEventListener("load", setup);