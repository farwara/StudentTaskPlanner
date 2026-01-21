//work in progress :task CRUD functionality will be added next
//WIP:task CRUD functionality will be added next
import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchTasks() {
            try {
                const response = await axiosClient.get('/api/tasks');
                setTasks(response.data);
            } catch (err) {
                console.error(err);
                setError('Failed to load tasks');
            }
        }

        fetchTasks();
    }, []);

    return (
        <main>
            <h1>My Tasks</h1>

            {error && <p className="error">{error}</p>}

            {tasks.length === 0 && <p>No tasks found.</p>}

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <strong>{task.title}</strong>
                        <p>{task.description}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Dashboard;