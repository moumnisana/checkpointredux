import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddTask.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/Actions";

function AddTask() {
    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const dispatch = useDispatch();
    const handleSubmit = () => {
        if (newTask !== "") {
            dispatch(addTask({ newTask: newTask }));
            setNewTask("");
        }
        else {
            alert("can not add an empty task")
        }
    };

    return (
        <div className="AddTask">
            <h1>Todo App!</h1>
            <div className="addField">
                <Form.Control
                    id="addTaskInput"
                    value={newTask}
                    size="lg"
                    type="text"
                    placeholder="Add task..."
                    onChange={handleChange}
                />
                <Button
                    variant="outline-primary"
                    style={{ border: "2px white solid", color: "white" }}
                    onClick={handleSubmit}
                >
                    Add
                </Button>
            </div>
        </div>
    );
}
export default AddTask;
