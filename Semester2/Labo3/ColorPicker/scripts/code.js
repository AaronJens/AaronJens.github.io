const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}

const update = () => {
    let colorDemos = document.getElementsByClassName("colorDemo");
    let sliders = document.getElementsByClassName("slider");

    let ValueRed = document.getElementById("red");
    let ValueGreen = document.getElementById("green");
    let ValueBlue = document.getElementById("blue");

    let redValue = sliders[0].value;
    let greenValue = sliders[1].value;
    let blueValue = sliders[2].value;

    ValueRed.innerHTML = redValue;
    ValueGreen.innerHTML = greenValue;
    ValueBlue.innerHTML = blueValue;
    colorDemos[0].style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
}

window.addEventListener("load", setup);