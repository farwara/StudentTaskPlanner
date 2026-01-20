
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import { useAuth } from '../context/AuthContext';

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        try {
            const response = await axiosClient.post('/api/auth/signin', {
                username: email,
                password: password,
            });

            const token = response.data.accessToken;

            if (!token) {
                throw new Error('No token returned');
            }

            // Store token + update auth state
            login(token);

            // Go to dashboard
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            setError('Login failed. Check your credentials.');
        }
    }

    return (
        <main>
            <h1>Login</h1>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>

                <button type="submit">Login</button>
            </form>
        </main>
    );
}

export default Login;
