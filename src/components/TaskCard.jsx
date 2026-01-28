
import { apiFetch } from '../api/api';

function TaskCard({ task, reload }) {
    async function toggleComplete() {
        await apiFetch(`/api/tasks/${task.id}`, {
            method: 'PATCH',
            body: JSON.stringify({ completed: !task.completed }),
        });
        reload();
    }

    async function deleteTask() {
        await apiFetch(`/api/tasks/${task.id}`, {
            method: 'DELETE',
        });
        reload();
    }

    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>

            <button onClick={toggleComplete}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>

            <button onClick={deleteTask}>Delete</button>
        </div>
    );
}

export default TaskCard;