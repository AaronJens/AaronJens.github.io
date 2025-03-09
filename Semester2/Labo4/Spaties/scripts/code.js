const setup = () => {
    let btnSpaties = document.getElementById("btnspaties");
    btnSpaties.addEventListener("click", omzettenInSpaties);
}
const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        result += inputText.charAt(i);
        result += " ";
    }
    return result.trim();
}
const omzettenInSpaties = () => {
    let txtInput = document.getElementById("txtInput");
    let output = document.getElementById("output");
    let tekst = txtInput.value;
    let tekstMetSpaties = maakMetSpaties(tekst);

    console.log(tekstMetSpaties);
    output.textContent = tekstMetSpaties;
}
window.addEventListener("load", setup);
