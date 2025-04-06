const setup = () => {
    let btn = document.querySelector('#calculate');
    btn.addEventListener('click', calculateTime);
};

const calculateTime = () => {
    let currentDate = new Date();
    let birthdayInput = document.getElementById('birthday').value;

    if (!birthdayInput) {
        console.log("Geen datum opgegeven.");
        return;
    }

    let birthday = new Date(birthdayInput);
    let timedif = currentDate - birthday;

    let days = Math.floor(timedif / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timedif / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timedif / (1000 * 60)) % 60);
    let seconds = Math.floor((timedif / 1000) % 60);

    console.log("Aantal dagen sinds je geboorte:", days);
    console.log("Uren:", hours);
    console.log("Minuten:", minutes);
    console.log("Seconden:", seconds);
};

window.addEventListener("load", setup);