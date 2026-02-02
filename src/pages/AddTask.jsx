
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
        <main className="container">
            <h1 className="page-title">Add task</h1>

            {error && <p className="error">{error}</p>}

            <form className="card" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Buy groceries"
                        required
                    />
                </div>

                <div className="field">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Optional details..."
                    />
                </div>

                <button className="btn" type="submit">Save task</button>
            </form>

        </main>
    );
}