
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
        <main className="container">
            <h1 className="page-title">Dashboard</h1>

            {error && <p className="error">{error}</p>}

            <div className="grid">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        reload={loadTasks}
                    />
                ))}
            </div>
        </main>
    );
}

export default Dashboard;