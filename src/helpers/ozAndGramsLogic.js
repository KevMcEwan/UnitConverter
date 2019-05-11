const ozAndGramsLogic = function (inputUnit, inputValue) {
if(inputValue === ""){
    return "Enter Value";
 } else if (inputUnit === "Ounces"){
        const outputValue = inputValue * 28.35;
        return outputValue.toFixed(0) + " g";
    } else if (inputUnit === "Grams"){
        const outputValue = inputValue / 28.35;
        return outputValue.toFixed(2) + " oz";
    } 
}

export default ozAndGramsLogic;