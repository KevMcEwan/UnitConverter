const temperatureLogic = function (unit, value) {

    if (value === "") {
        return "";
    } else if (unit === "Fahrenheit") {
        const result = (value - 32) * (5 / 9);
        return result.toFixed(0) + " ˚C";
    } else if (unit === "Celsius") {
        const result = (value * (9 / 5)) + 32;
        return result.toFixed(0) + " ˚F";
    }
}

export default temperatureLogic;
