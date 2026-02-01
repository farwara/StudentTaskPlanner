
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        try {
            await register(email, password, ["user"]);
            navigate("/login");
        } catch (err) {
            console.error(err);
            setError("Registration failed");
        }
    }

    return (
        <main>
            <h1>Register</h1>

            {error && <p>{error}</p>}

            <form className="card" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. farwa@test.com"
                        required
                    />
                </div>

                <div className="field">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Choose a password"
                        required
                    />
                </div>

                <button className="btn" type="submit">Create account</button>

                <p className="muted">
                    Already have an account? <Link to="/login">Back to login</Link>
                </p>
            </form>
        </main>
    );
}
