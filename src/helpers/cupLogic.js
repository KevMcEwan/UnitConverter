const calculateGramsFromCups = function (ingredient, cupMeasurement) {

    const strToArr = cupMeasurement.split("");

    let measurement = null;

    if (strToArr.length > 1){
        measurement = strToArr[0] / strToArr[2]
    } else {
        measurement = Number(cupMeasurement);
    }

    let oneCupWeight = null;

    if (ingredient === "Flour") {
        oneCupWeight = 125;
    } else if (ingredient === "Rice (Uncooked)") {
        oneCupWeight = 178.15;
    } else if (ingredient === "Oats") {
        oneCupWeight = 102.2;
    } else if (ingredient === "Sugar (Granulated)") {
        oneCupWeight = 201;
    } else if (ingredient === "Sugar (Caster)") {
        oneCupWeight = 189.5;
    } else if (ingredient === "Sugar (Icing)") {
        oneCupWeight = 132.73;
    } else if (ingredient === "Butter") {
        oneCupWeight = 227;
    } else if (ingredient === "Milk") {
        oneCupWeight = 244.87;
    }

    const result = (oneCupWeight * measurement);

    if (Number.isInteger(result) && ingredient === "Milk") {
        return result + " ml";
    } else if (Number.isInteger(result) && ingredient !== "Milk") {
        return result + " g";
    } else if (Number.isInteger(result) === false && ingredient === "Milk") {
        return result.toFixed(0) + " ml";
    } else {
        return result.toFixed(0) + " g"
    }
};

export default calculateGramsFromCups;