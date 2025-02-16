const setup = () => {
    window.alert("Dit is een mededeling");

    let bevestigen = window.confirm("Weet u het zeker?");
    console.log(bevestigen);     // resultaat : bij ok --> TRUE, bij annuleren --> FALSE

    let naam = window.prompt("Wat is uw naam", "onbekend");
    console.log(naam);
    //          resultaat:
    //          ok: stuurt de ingegeven naam in de console
    //          annuleren: stuurt null op console
}

window.addEventListener("load", setup);
