const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtOutput = document.getElementById("txtOutput");
    let txtInput = document.getElementById("txtInput");
    let txtBegin = document.getElementById("txtBegin");
    let txtEinde = document.getElementById("txtEinde");

    let tekst = txtInput.value;   // uitlezen input altijd .value, ander element --> .innerHTML
    let idBegin=parseInt(txtBegin.value);  //converteren naar een integer
    let idEinde=parseInt(txtEinde.value);

    let resultaat = tekst.substring(idBegin, idEinde);
    txtOutput.innerHTML=resultaat;
}
window.addEventListener("load", setup);