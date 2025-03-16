const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);

};

const valideer = () => {
    valideerVoornaam();
    valideerAchternaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerAantalKinderen();
}

const valideerVoornaam = () => {
    let txtVoornaam = document.querySelector("#txtVoornaam");
    let voornaam = txtVoornaam.value.trim();

    if (voornaam.length > 30) {
        reportError(txtVoornaam, "max. 30 karakters");
    } else {
        clearError(txtVoornaam);
    }
}

const valideerAchternaam = () => {
    let txtAchternaam = document.querySelector("#txtAchternaam");
    let achternaam = txtAchternaam.value.trim();

    if (achternaam === "") {
        reportError(txtAchternaam, "verplicht veld");
    } else if (achternaam.length > 50) {
        reportError(txtAchternaam, "max 50 karakters");
    } else {
        clearError(txtAchternaam);
    }
}

const valideerGeboortedatum = () => {
    let txtGeboortedatum = document.querySelector("#txtGeboortedatum");
    let geboortedatum = txtGeboortedatum.value.trim();

    if (geboortedatum === "") {
        reportError(txtGeboortedatum, "verplicht veld");
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(geboortedatum)) {
        reportError(txtGeboortedatum, "formaat is niet jjjj-mm-dd");
    } else {
        clearError(txtGeboortedatum);
    }
}

const valideerEmail = () => {
    let txtEmail = document.querySelector("#txtEmail");
    let email = txtEmail.value.trim();

    if (email === "") {
        reportError(txtEmail, "verplicht veld");
    } else if (!/^.+@.+\..+$/.test(email)) {
        reportError(txtEmail, "geen geldig email adres");
    } else {
        clearError(txtEmail);
    }
}

const valideerAantalKinderen = () => {
    let txtAantalKinderen = document.querySelector("#txtAantalKinderen");
    let aantalKinderen = txtAantalKinderen.value.trim();

    if (aantalKinderen === "") {
        reportError(txtAantalKinderen, "verplicht veld");
    } else if (!isGetal(aantalKinderen) || parseInt(aantalKinderen) < 0) {
        reportError(txtAantalKinderen, "is geen positief getal");
    } else if (parseInt(aantalKinderen) >= 99) {
        reportError(txtAantalKinderen, "is te vruchtbaar");
    } else {
        clearError(txtAantalKinderen);
    }
}

const reportError = (element, message) => {
    element.className = "invalid";
    element.nextElementSibling.innerHTML = message;
}

const clearError = (element) => {
    element.className = "";
    element.nextElementSibling.innerHTML = "";
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

window.addEventListener("load", setup);
