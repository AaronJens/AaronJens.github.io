const setup = () => {
    let lstItems = document.querySelectorAll("li");
    let foto = document.createElement("img");

    for (let i = 0; i < lstItems.length; i++) {
        lstItems[i].setAttribute("class", "listitem");
    }

    foto.src = "./img/foto.png";
    foto.alt = "vives";
    document.body.appendChild(foto);
}

window.addEventListener("load", setup);
