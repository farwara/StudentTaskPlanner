


import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        // mock user data
        login({ username: 'student' });
        navigate('/dashboard');
    };

    return (
        <div>
            <h2>Login</h2>
            <p>This is a mock login for now.</p>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;