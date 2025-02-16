const setup = () => {
    button.addEventListener('click', toggleList);
};

const toggleList = () => {
    list.classList.toggle('modified');
};

let button= document.getElementById('toggleButton');
let list  = document.getElementById('myList');

window.addEventListener("load", setup);
