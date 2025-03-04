const setup = () => {
    let pbelangrijk = document.getElementsByClassName("belangrijk");

    for (let i = 0; i < pbelangrijk.length; i++) {
        pbelangrijk [i].classList.add("opvallend");
    }


    /*  let paragrafen = document.getElementsByClassName("p"); -> niet op deze manier
        paragrafen[1].className="belangrijk opvallend";
        paragrafen[3].className="belangrijk opvallend";*/
}
window.addEventListener("load", setup);