
import { useEffect, useState } from 'react';
import { apiFetch } from '../api/api';
import TaskCard from '../components/TaskCard';
import {Link} from 'react-router-dom';
function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    async function loadTasks() {
        try {
            const data = await apiFetch('/api/tasks');
            setTasks(data);
        } catch (err) {
            console.error(err);
            setError('Failed to load tasks');
        }
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <main>
            <h1>Dashboard</h1>

            {/* ADD TASK BUTTON */}
            <Link to="/add-task">
                <button>Add Task</button>
            </Link>
            {error && <p>{error}</p>}

            {tasks.map(task => (
                <TaskCard key={task.id} task={task} reload={loadTasks} />
            ))}
        </main>
    );
}

export default Dashboard;