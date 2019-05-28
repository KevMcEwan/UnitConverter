import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
    units: [
        "Celsius",
        "Fahrenheit",
    ],
    currentInputUnit: "",
    currentInputNumber: ""
};

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.UPDATE_CURRENT_INPUT_UNIT: {
            console.log(action);

            let newInputUnit = action.payload;
            let newState = _.cloneDeep(state);
            newState.currentInputUnit = newInputUnit;
            return newState;
        }

        case ACTIONS.Types.UPDATE_CURRENT_INPUT_NUMBER: {
            console.log(action);

            let newInputNumber = action.payload;
            let newState = _.cloneDeep(state);
            newState.currentInputNumber = newInputNumber;
            return newState;
        }

        default:
            return state;
    }
};

export default todoReducer;