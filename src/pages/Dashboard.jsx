

import Task from '../components/Task/Task';

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>

            <section>
                <h3>Your Tasks</h3>

                <ul>
                    <Task title="Task 1 (placeholder)" completed={false} />
                    <Task title="Task 2 (placeholder)" completed={true} />
                    <Task title="Task 3 (placeholder)" completed={false} />
                </ul>
            </section>
        </div>
    );
}

export default Dashboard;


