const setup = () => {
    document.getElementById("btnSave").addEventListener("click", saveSettings);
    document.getElementById("btnShow").addEventListener("click", showSettings);
};


const saveSettings = () => {
    let settings = {};  // leeg object aanmaken
    let settingsJSON;

    // bouw settings object op basis van ingevulde gegevens
    // eigenlijk zouden we hier ook inputvalidering moeten doen
    // de 3 tekstvakken opvragen:
    settings.age = parseInt(document.getElementById("pagSettings-numAge").value);
    settings.weight = parseInt(document.getElementById("pagSettings-numWeight").value);
    settings.budget = parseInt(document.getElementById("pagSettings-numBudget").value);

    // bewaar settings als JSON string in local storage  //local storage is een tekstbestand
    settingsJSON = JSON.stringify(settings);
    localStorage.setItem("VIVES.be.settingsPerson", settingsJSON);   // webschrijven naar browser
    // altijd een unieke naam aan geven --> begin met de domeinnaam
};

const showSettings = () => {
    let settings;
    let settingsJSON = localStorage.getItem("VIVES.be.settingsPerson");  // object ophalen

    // Maak een leeg settings object, of bouw het op basis
    // van de settings JSON string in local storage
    if (settingsJSON == undefined) {  // Bestaat dat object?
        settings = {     // indien object niet bestaat:
            age: 0,
            weight: 0,
            budget: 0
        };
    } else { // indien object bestaat:
        settings = JSON.parse(settingsJSON);  // terug converteren naar naar een object literal
    }

    // vul de invoervelden met de settings-waarden
    document.getElementById("pagSettings-numAge").value = settings.age;
    document.getElementById("pagSettings-numWeight").value = settings.weight;
    document.getElementById("pagSettings-numBudget").value = settings.budget;
};

window.addEventListener("load", setup);