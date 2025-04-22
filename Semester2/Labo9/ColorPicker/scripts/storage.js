const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    let sliderSettings = {
        red:red,
        green:green,
        blue:blue
    }
    let settingsJSON = JSON.stringify(sliderSettings);
    localStorage.setItem("Vives.be.colorpicker.be.settingsSlider", settingsJSON);
}

const restoreSliderValues = () => {
    let jsonText = localStorage.getItem("Vives.be.colorpicker.be.settingsSlider");

    if (jsonText != null) {
        let sliderSettings = JSON.parse(jsonText);
        document.getElementById("sldRed").value = sliderSettings.red;
        document.getElementById("sldGreen").value = sliderSettings.green;
        document.getElementById("sldBlue").value = sliderSettings.blue;
    }
}

const storeSwatches = () => {
    let rgbColors =[];
    let swatches = document.getElementsByClassName("swatch");
    for (let i = 1; i < swatches.length; i++) {
        let rgb = {
            red:swatches[i].getAttribute("data-red"),
            green:swatches[i].getAttribute("data-green"),
            blue:swatches[i].getAttribute("data-blue")
        }
        rgbColors.push(rgb);
    }

    let jsonText = JSON.stringify(rgbColors);
    localStorage.setItem("Vives.be.colorpicker.be.settingsColor", jsonText);
};

const restoreSwatches = () => {
    let jsonText = localStorage.getItem("Vives.be.colorpicker.be.settingsColor");
    if (jsonText != null) {
        let rgbColors = JSON.parse(jsonText);
        for (let i = 0; i < rgbColors.length; i++) {
            let rgb = rgbColors[i];
            addSwatchComponent(rgb.red, rgb.green, rgb.blue);
        }
    }
};
