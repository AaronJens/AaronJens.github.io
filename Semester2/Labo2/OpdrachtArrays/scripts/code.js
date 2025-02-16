const setup = () => {
    let familieleden = ["Suske", "Wiske", "Kiekeboe", "Jommeke", "Tintin"];
    console.log(familieleden.length);

    for (let i = 0; i < familieleden.length; i = i+2) {
    console.log(familieleden[i])
    }

    VoegNaamToe(familieleden); //ALTIJD pass by reference!
    console.log(familieleden.join(" - "));
}

const VoegNaamToe = (namen) =>  {
    let naam = window.prompt('wat is je naam?');
    namen.push(naam);
    for (let i = 0; i < namen.length; i++)
    {
     console.log("familielid" + " " + namen[i]);
    }
 }

window.addEventListener("load", setup);