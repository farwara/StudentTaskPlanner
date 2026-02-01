
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        try {
            await login(email, password);
            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            setError("Login failed");
        }
    }

    return (
        <main>
            <h1>Login</h1>

            {error && <p>{error}</p>}

            <form className="card" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. user@taskplanner.nl"
                        required
                    />
                </div>

                <div className="field">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Your password"
                        required
                    />
                </div>

                <button className="btn" type="submit">Login</button>

                <p className="muted">
                    No account? <Link to="/register">Create one</Link>
                </p>
            </form>

        </main>
    );
}

export default Login;