
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
        <header className="navbar">
            <div className="navbar__brand">Task Planner</div>

            <nav className="navbar__links">
                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
                    Dashboard
                </NavLink>

                <NavLink to="/add-task" className={({ isActive }) => (isActive ? "active" : "")}>
                    Add task
                </NavLink>
            </nav>

            <div className="navbar__right">
                {user?.email && <span className="navbar__user">{user.email}</span>}
                <button className="btn btn--ghost" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </header>
    );
}