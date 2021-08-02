import { v4 as uuid_v4 } from "uuid";
import {
    ADD_TASK,
    EDIT_TASK,
    TOGGLE_IS_DONE,
} from "../constants/actions-types";

const initialState = {
    tasks: [
        {
            id: uuid_v4(),
            description: "n7eb netla3 el mountain everest",
            isDone: false,
        },
        {
            id: uuid_v4(),
            description: "etla3 lel gamra",
            isDone: false,
        },
        {
            id: uuid_v4(),
            description: "sky diving in dubai",
            isDone: false,
        },
        {
            id: uuid_v4(),
            description: "get a red passport",
            isDone: false,
        },
    ],
};

function tasksReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TASK:
            return {
                tasks: [
                    ...state.tasks,
                    {
                        id: uuid_v4(),
                        description: payload.newTask,
                        isDone: false,
                    },
                ],
            };
        case TOGGLE_IS_DONE:
            return {
                tasks: state.tasks.map((task) =>
                    payload.id === task.id
                        ? { ...task, isDone: !task.isDone }
                        : task
                ),
            };
        case EDIT_TASK:
            return {
                tasks: state.tasks.map((task) =>
                    payload.id === task.id
                        ? { ...task, description: payload.updatedTask }
                        : task
                ),
            };
        default:
            return state;
    }
}

export default tasksReducer;
