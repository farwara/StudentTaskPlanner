
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api/api";

export default function AddTask() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        try {
            await apiFetch("/api/tasks", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    description,
                    completed: false,
                }),
            });

            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            setError("Failed to add task");
        }
    }

    return (
        <main>
            <h1>Add Task</h1>

            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit">Save Task</button>
            </form>
        </main>
    );
}