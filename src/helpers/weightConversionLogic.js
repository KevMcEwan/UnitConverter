const weightConversionLogic = function (inputUnit, outputUnit, grams, kilos, ounces, pounds) {

    const ouncesToGrams = function(oz){
        return oz * 28.35;
    }

    const gramsToOunces = function(g){
        return g / 28.35;
    }

    const ozAndLbToOz = function(oz, lb){
        const lbToOz = lb*16;
        return Number(oz) + Number(lbToOz);
    }

    const gAndKgToG = function(g, kg){
        return Number(g) + Number(kg * 1000);
    }

    if (inputUnit === "Ounces" && outputUnit === "Grams") {
        return ouncesToGrams(ounces).toFixed(0) + " g";

    } else if (inputUnit === "Grams" && outputUnit === "Ounces") {
        return gramsToOunces(grams).toFixed(1) + " oz";

    } else if (inputUnit === "Grams" && outputUnit === "Grams and Kilograms") {
        const kg = Math.floor(grams / 1000);
        const gramsLeft = grams - (kg * 1000);
        return kg + " kg and " + gramsLeft + " g";

    } else if (inputUnit === "Grams" && outputUnit === "Ounces and Pounds") {
        const totalOz = gramsToOunces(grams);
        const lbs = Math.floor(totalOz / 16);
        const ozLeft = (totalOz - (lbs * 16)).toFixed(1);
        return lbs + " lbs, " + ozLeft + " oz";

    } else if (inputUnit === "Ounces" && outputUnit === "Ounces and Pounds"){
        const lbs = Math.floor(ounces / 16);
        const ozLeft = ounces - (lbs * 16);
        return lbs + " lbs and " + ozLeft.toFixed(1) + " oz";

    } else if (inputUnit === "Ounces" && outputUnit === "Grams and Kilograms") {
        const outputValue = ouncesToGrams(ounces);
        const kg = Math.floor(outputValue / 1000);
        const gramsLeft = (outputValue - (kg * 1000)).toFixed(0);
        return kg + " kg and " + gramsLeft + " g";

    } else if (inputUnit === "Ounces and Pounds" && outputUnit === "Ounces"){
        const oz = ozAndLbToOz(ounces, pounds);
        return oz + " oz";

    } else if (inputUnit === "Ounces and Pounds" && outputUnit === "Grams") {
        const oz = ozAndLbToOz(ounces, pounds);
        return ouncesToGrams(oz).toFixed(0) + " g";

    } else if (inputUnit === "Ounces and Pounds" && outputUnit === "Grams and Kilograms") {
        const oz = ozAndLbToOz(ounces, pounds);
        const g = ouncesToGrams(oz);
        const kg = Math.floor(g / 1000);
        const gramsLeft = g - (kg * 1000);
        return kg + " kg and " + gramsLeft.toFixed(0) + " g"; 

    } else if (inputUnit === "Grams and Kilograms" && outputUnit === "Grams") {
        return gAndKgToG(grams, kilos) + " g";

    } else if (inputUnit === "Grams and Kilograms" && outputUnit === "Ounces") {
        const totalGrams = gAndKgToG(grams, kilos);
        return gramsToOunces(totalGrams).toFixed(1) + " oz";

    } else if (inputUnit === "Grams and Kilograms" && outputUnit === "Ounces and Pounds") {
        const g = gAndKgToG(grams, kilos);
        const oz = gramsToOunces(g);
        const lbs = Math.floor(oz / 16);
        const ozLeft = oz - (lbs * 16);
        return lbs + " lbs and " + ozLeft.toFixed(1) + " oz";
    }
}

export default weightConversionLogic;



