import { useState, useEffect } from "react";
import TaskForm from "./components/to-do-form";
import ToDoList from "./components/to-do-list";
import StatusSelector from "./components/selector";


function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

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

    return (
        <>
            <TaskForm onAddTask={handleAddTask} />
            <StatusSelector />
            <div className="tasks-container">
                <ToDoList
                    tasks={tasks}
                    onDeleteTask={handleDeleteTask}
                    onToggleComplete={handleToggleComplete}
                />
            </div>
        </>
    );
}

export default App;
