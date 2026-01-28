import { useState } from "react";
import axiosInstance from "../api/api.js";

function CreateTaskForm({ onTaskCreated }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        try {
            await axiosInstance.post("/api/tasks", {
                title,
                description,
                completed: false,
            });

            setTitle("");
            setDescription("");

            // refresh tasks
            onTaskCreated();
        } catch (err) {
            setError("Failed to create task");
            console.error(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Task</h3>

            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <textarea
                placeholder="Task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">Add Task</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}

export default CreateTaskForm;