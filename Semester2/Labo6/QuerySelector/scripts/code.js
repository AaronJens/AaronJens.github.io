const changeText = () => {
    let par = document.querySelectorAll("p")[0];
    if (par.childNodes.length > 0) {
        par.removeChild(par.childNodes[0]);
    }
    let textnode = document.createTextNode("Good Job!");
    par.appendChild(textnode);
};

const setup = () => {
    let par = document.querySelectorAll("p")[0];
    par.addEventListener("click", changeText);
};

window.addEventListener("load", setup);
