import { useState, useEffect } from "react";
import TaskForm from "./components/to-do-form";
import ToDoList from "./components/to-do-list";
import StatusSelector from "./components/selector";


function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [filterStatus, setFilterStatus] = useState(1); // 1 = Todas, 2 = Completadas, 3 = Pendientes


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleToggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const filteredTasks = tasks.filter((task) => {
        if (filterStatus === 2) return task.completed;
        if (filterStatus === 3) return !task.completed;
        return true;
    });

    return (
        <>
            <TaskForm onAddTask={handleAddTask} />
            <StatusSelector status={filterStatus} onChange={setFilterStatus} />
            <div className="tasks-container">
                <ToDoList
                    tasks={filteredTasks}
                    onDeleteTask={handleDeleteTask}
                    onToggleComplete={handleToggleComplete}
                />
            </div>
        </>
    );
}

export default App;
