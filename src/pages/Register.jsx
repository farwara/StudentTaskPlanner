import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../api/axiosClient';

function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        try {
            await axiosClient.post('/api/auth/signup', {
                username: email,
                email: email,
                password: password,
                role: ['user'],
            });

            navigate('/');
        } catch (err) {
            console.error(err.response?.data || err);
            setError('Registration failed');
        }
    }

    return (
        <main>
            <h1>Register</h1>

            {error && <p>{error}</p>}

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

                <button type="submit">Register</button>
            </form>
        </main>
    );
}

export default Register;