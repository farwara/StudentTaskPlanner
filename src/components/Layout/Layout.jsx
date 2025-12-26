

import { Link } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <Link to="/">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
            </header>

            <main className="main">
                {children}
            </main>
        </>
    );
}

export default Layout;
