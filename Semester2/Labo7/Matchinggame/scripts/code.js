let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    aantalPhotos: [],
    TOTAL_AMOUNT: 0,
    POSSIBLE_SUBJECTS_PIC: ["Nature", "Cities", "Animals", "Space"],
    PHOTOS_PER_POSSIBLE_SUBJECT: [6, 6, 6, 6],
    subjectPictures: [],
    PIC_PATH: "images/",
    PIC_TYPE: ".jpg",
    AMOUNT_TO_MATCH: 2,
    tries: 0,
    maxCardsPerLine: 8,
    marginRatio: 0.05
};

let cardRatio = { width: 1, height: 1 };
let isBusy = false;

const setup = () => {
    addSubjectChooser();
    document.getElementById("startBtn").addEventListener("click", play);
    Array.from(document.getElementsByClassName("restart")).forEach(btn => {
        btn.addEventListener("click", restart);
    });
    Array.from(document.getElementsByClassName("subjectInputPictures")).forEach(input => {
        subjectCheck(input);
    });
    const amountOfCards = document.getElementById("amountOfCards");
    updateAmount();
    amountOfCards.addEventListener("click", updateAmount);
    amountOfCards.addEventListener("input", updateAmount);
};

const updateAmount = () => {
    const amountOfCards = document.getElementById("amountOfCards");
    global.AMOUNT_TO_MATCH = Number(amountOfCards.value);
};

const addSubjectChooser = () => {
    const parent = document.getElementById("SubjectsPictures");
    let subjects = clearNullsList(global.POSSIBLE_SUBJECTS_PIC);
    let cardCount = clearNullsList(global.PHOTOS_PER_POSSIBLE_SUBJECT);
    for (let i = 0; i < subjects.length; i++) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerHTML = `${subjects[i]}:`;
        input.setAttribute("Data-subject", `${subjects[i]}`);
        input.type = "number";
        input.id = subjects[i];
        input.name = `Cardcount of ${subjects[i]}`;
        input.max = cardCount[i];
        input.min = "0";
        input.value = Math.floor(cardCount[i] / 2);
        label.classList.add("inputSubjectPictures");
        input.classList.add("subjectInputPictures");
        input.addEventListener("click", subjectUpdate);
        input.addEventListener("input", subjectUpdate);
        parent.appendChild(label);
        parent.appendChild(input);
    }
};

const subjectUpdate = (event) => {
    let input = event.currentTarget;
    subjectCheck(input);
};

const subjectCheck = (input) => {
    const subject = input.getAttribute("Data-subject");
    if (input.value === "0" || input.value === null) {
        let index = global.subjectPictures.indexOf(subject);
        global.subjectPictures[index] = null;
        global.aantalPhotos[index] = null;
    } else if (global.subjectPictures.indexOf(subject) === -1) {
        global.subjectPictures.push(subject);
        global.aantalPhotos.push(input.value);
    } else {
        global.aantalPhotos[global.subjectPictures.indexOf(subject)] = input.value;
    }
};

const play = () => {
    if (clearNullsList(global.aantalPhotos).length !== 0) {
        document.getElementById("Beginning").classList.add("hidden");
        createCards();
        document.getElementById("Game").classList.remove("hidden");
        amountOfCards();
    } else {
        alert("No subject chosen");
    }
};

const createListCardPaths = () => {
    const List = [];
    for (let i = 0; i < global.AMOUNT_TO_MATCH; i++) {
        for (let j = 0; j < global.aantalPhotos.length; j++) {
            let amount = global.aantalPhotos[j];
            let subject = global.subjectPictures[j];
            for (let k = 0; k < amount; k++) {
                List.push(`${global.PIC_PATH}${subject}_${k}${global.PIC_TYPE}`);
            }
        }
    }
    return List;
};

const createCards = () => {
    const playField = document.getElementById("PlayField");
    let data = createListCardPaths();
    while (data.length > 0) {
        const img = document.createElement("img");
        img.classList.add("card");
        img.setAttribute("alt", "Card");
        img.setAttribute("src", `${global.PIC_PATH}achterkant.jpg`);
        let random = Math.floor(Math.random() * data.length);
        img.setAttribute("Data-other", data[random]);
        data[random] = null;
        data = clearNullsList(data);
        img.addEventListener("click", turn);
        img.addEventListener("click", update);
        playField.appendChild(img);
    }
    algorithm(document.getElementsByClassName("card"), playField);
};

const turn = (event) => {
    if (isBusy) return;
    let turned = document.getElementsByClassName("turned");
    let img = event.currentTarget;
    if (img.classList.contains("turned") || img.classList.contains("found")) return;
    if (turned.length < global.AMOUNT_TO_MATCH) {
        img.setAttribute("src", img.getAttribute("Data-other"));
        img.classList.add("turned");
    }
};

const update = () => {
    const turned = document.getElementsByClassName("turned");
    if (turned.length === global.AMOUNT_TO_MATCH) {
        isBusy = true;
        document.body.style.cursor = "wait";
        global.tries++;
        document.getElementById("triesH").innerText = global.tries;
        let match = Array.from(turned).every(img => img.getAttribute("Data-other") === turned[0].getAttribute("Data-other"));
        if (match) {
            Array.from(turned).forEach(card => {
                card.classList.add("match");
            });
            setTimeout(() => {
                Array.from(turned).forEach(card => {
                    card.classList.remove("turned", "match");
                    card.classList.add("found");
                });
                isBusy = false;
                document.body.style.cursor = "default";
                checkEnd();
            }, 1000);
        } else {
            Array.from(turned).forEach(card => {
                card.classList.add("mismatch");
            });
            setTimeout(() => {
                turnBack();
                isBusy = false;
                document.body.style.cursor = "default";
            }, 1000);
        }
    }
};

const checkEnd = () => {
    const found = document.getElementsByClassName("found");
    if (found.length === global.TOTAL_AMOUNT) {
        endGame();
    }
};

const amountOfCards = () => {
    let amount = 0;
    for (let i = 0; i < global.aantalPhotos.length; i++) {
        amount += Number(global.aantalPhotos[i] * global.AMOUNT_TO_MATCH);
    }
    global.TOTAL_AMOUNT = amount;
};

const turnBack = () => {
    const turned = document.getElementsByClassName("turned");
    Array.from(turned).forEach(card => {
        card.setAttribute("src", `${global.PIC_PATH}achterkant.jpg`);
        card.classList.remove("turned", "mismatch");
    });
};

const clearNullsList = (list) => {
    return list.filter(item => item !== null && item !== "");
};

const endGame = () => {
    document.getElementById("Game").classList.add("hidden");
    document.getElementById("Ending").classList.remove("hidden");
    document.getElementById("tries").innerText = global.tries;
};

const restart = () => {
    global.tries = 0;
    isBusy = false;
    document.body.style.cursor = "default";
    document.getElementById("triesH").innerText = global.tries;
    document.getElementById("Ending").classList.add("hidden");
    document.getElementById("Beginning").classList.remove("hidden");
    document.getElementById("PlayField").innerHTML = "";
};

const algorithm = (cards, field) => {
    const fieldWidth = (window.innerWidth - field.offsetLeft);
    const amountOfcards = cards.length;
    if (global.maxCardsPerLine && global.maxCardsPerLine !== 0) {
        let cardsPerRow = null;
        let valueForI = 2;
        while (!cardsPerRow || global.maxCardsPerLine < cardsPerRow || cardsPerRow === 0 || fieldWidth / cardsPerRow < 150) {
            for (let i = valueForI; i <= amountOfcards; i++) {
                if (amountOfcards % i === 0) {
                    cardsPerRow = amountOfcards / i;
                    valueForI = i;
                    break;
                }
            }
            valueForI++;
        }
        let width = fieldWidth / cardsPerRow;
        let margin = width * global.marginRatio > 10 ? 5 : width * global.marginRatio;
        width = Math.floor(width * (1 - (global.marginRatio * 2)) * cardRatio.width) * 0.95;
        if (width > 300) width = 150;
        Array.from(cards).forEach(card => {
            card.width = width;
            card.style.height = `${width * cardRatio.height}px`;
            card.style.margin = `${margin}px`;
        });
    }
};

window.addEventListener("load", setup);