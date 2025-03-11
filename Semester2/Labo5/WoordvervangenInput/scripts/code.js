const setup = () => {
    let btnVervang = document.getElementById("btnVervang");
    btnVervang.addEventListener("click", klikken);
}

const klikken = () => {
    let inputTekst = document.getElementById("txtZin").value;
    let oud = document.getElementById("txtOud").value;
    let nieuw = document.getElementById("txtNieuw").value;
    let txtOutput = document.getElementById("txtOutput");

    let output = vervangAlles(inputTekst, oud, nieuw);
    txtOutput.innerHTML = output;
    console.log(output);

}
const vervangAlles = (inputTekst, oud, nieuw) => {
    let result = inputTekst;
    let idx = result.indexOf(oud);
    if (inputTekst && oud && nieuw) {
        while (idx != -1) {
            let voor = result.slice(0, idx);
            let na = result.slice(idx + oud.length, result.length);
            result = voor + nieuw + na;
            idx = result.indexOf(oud, idx + nieuw.length);
        }
        return result;
    }
}

window.addEventListener("load", setup);