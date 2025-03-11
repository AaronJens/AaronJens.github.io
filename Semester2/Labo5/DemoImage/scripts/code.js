const setup = () => {
    let logo = document.getElementById("imgPhoto");
    logo.addEventListener("mouseover", changeLogo);

}

const changeLogo = () => {
    let photo = document.getElementById("imgPhoto");

    photo.src = "./images/cats.jpg";
    photo.alt = "cat";
    photo.className = "sizePhoto";

    document.getElementById("txtText").textContent = "school of cats";

}

window.addEventListener("load", setup);