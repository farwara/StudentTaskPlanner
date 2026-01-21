
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
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

            // After successful registration → go to login
            navigate('/login');
        } catch (err) {
            console.error(err);
            setError('Registration failed. Try another email or password.');
        }
    }

    return (
        <main>
            <h1>Register</h1>

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

                <button type="submit">Register</button>
            </form>
            <p> Don't have an account? <Link to= "/login">Login</Link></p>
        </main>
    );
}

export default Register;