const setup = () => {
    document.getElementById("btnZoeken").addEventListener("click", update);
    update();
}

const update = () => {
    const inputText = document.getElementById("txtTekst").value;
    document.getElementById("index_of").innerText = via_index_of(inputText);
    document.getElementById("last_index_of").innerText = via_last_index_of(inputText);
}

const via_index_of = (inputText, searchString="an") => {
    let count = 0;
    let lastMatchedIndex = -1;
    while ((lastMatchedIndex = inputText.toLowerCase().indexOf(searchString, lastMatchedIndex + 1)) !== -1) {
        count++;
    }

    return count.toString();
}

const via_last_index_of = (inputText, searchString="an") => {
    let count = 0;
    let lastMatchedIndex = inputText.length;
    while ((lastMatchedIndex = inputText.toLowerCase().lastIndexOf(searchString, lastMatchedIndex - 1)) !== -1) {
        count++;
    }

    return count.toString();
}

window.addEventListener("load", setup);