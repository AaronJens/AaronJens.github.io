const setup = () => {
    const seats = document.querySelectorAll(".grid img");
    let selectedSeats = [];

    const input = document.getElementById("input_number_seats");
    const findButton = document.getElementById("find_seats");
    const bookButton = document.getElementById("book");

    const findForm = document.getElementById("find_form");
    const selectionForm = document.getElementById("selection_form");

    findForm.addEventListener("submit", e => e.preventDefault());
    selectionForm.addEventListener("submit", e => e.preventDefault());

    const resetSelection = () => {
        seats.forEach(seat => {
            if (seat.classList.contains("selected")) {
                seat.classList.remove("selected");
                seat.src = "images/seat_avail.png";
            }
        });
        selectedSeats = [];
    };

    const find_seats = () => {
        resetSelection();
        const numberToSelect = parseInt(input.value, 10);
        let count = 0;

        for (let i = 0; i < seats.length && count < numberToSelect; i++) {
            if (!seats[i].classList.contains("booked") && !seats[i].classList.contains("selected")) {
                seats[i].classList.add("selected");
                seats[i].src = "images/seat_select.png";
                selectedSeats.push(seats[i]);
                count++;
            }
        }

        if (count < numberToSelect) {
            alert("Niet genoeg beschikbare stoelen.");
        }
    };

    const book = () => {
        if (selectedSeats.length === 0) {
            alert("Geen stoelen geselecteerd!");
            return;
        }

        selectedSeats.forEach(seat => {
            seat.classList.remove("selected");
            seat.classList.add("booked");
            seat.src = "images/seat_unavail.png";
            seat.removeEventListener("click", toggleSeat);
        });

        alert(`${selectedSeats.length} stoelen geboekt!`);
        selectedSeats = [];
    };

    const remove_seat_selection_input = () => {
        resetSelection();
    };

    const toggleSeat = function () {
        if (this.classList.contains("booked")) return;

        const max = parseInt(input.value, 10);

        if (this.classList.contains("selected")) {
            this.classList.remove("selected");
            this.src = "images/seat_avail.png";
            selectedSeats = selectedSeats.filter(seat => seat !== this);
        } else {
            if (selectedSeats.length < max) {
                this.classList.add("selected");
                this.src = "images/seat_select.png";
                selectedSeats.push(this);
            }
        }
    };

    seats.forEach(seat => seat.addEventListener("click", toggleSeat));
    input.addEventListener("change", remove_seat_selection_input);
    findButton.addEventListener("click", find_seats);
    bookButton.addEventListener("click", book);
};

window.addEventListener("load", setup);