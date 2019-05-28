// types of action
const Types = {
    UPDATE_CURRENT_INPUT_UNIT: "UPDATE_CURRENT_INPUT_UNIT",
    UPDATE_CURRENT_INPUT_NUMBER: "UPDATE_CURRENT_INPUT_NUMBER"
};

// actions
const updateCurrentInputUnit = selectedUnit => ({
    type: Types.UPDATE_CURRENT_INPUT_UNIT,
    payload: selectedUnit
});

const updateCurrentInputNumber = enteredNumber => ({
    type: Types.UPDATE_CURRENT_INPUT_NUMBER,
    payload: enteredNumber
});

export default {
    updateCurrentInputUnit,
    updateCurrentInputNumber,
    Types
};