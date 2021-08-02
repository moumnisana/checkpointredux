import {
    ADD_TASK,
    TOGGLE_IS_DONE,
    EDIT_TASK,
} from "../constants/actions-types";

export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload,
    };
};
export const toggleIsDone = (payload) => {
    return {
        type: TOGGLE_IS_DONE,
        payload,
    };
};
export const editTask = (payload) => {
    return {
        type: EDIT_TASK,
        payload,
    };
};
