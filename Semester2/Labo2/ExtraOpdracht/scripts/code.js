const setup = () => {
    button.addEventListener('click', toggleList);
};

const toggleList = () => {
    list.classList.toggle('modified');
    list.classList.toggle('not-modified');
};

let button = document.getElementById('toggleButton');
let list = document.getElementById('myList');

window.addEventListener("load", setup);w 