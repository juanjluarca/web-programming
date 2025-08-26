import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();


        const newTask = {
            id: Date.now(),
            title,
            description,
            completed: false,
        };

        onAddTask(newTask);

        setTitle("");
        setDescription("");
    };
    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="titulo" className="form-label">Título</label>
                <input
                    id="titulo"
                    type="text"
                    placeholder="Título..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <textarea
                    id="descripcion"
                    placeholder="Descripción..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>

            <button type="submit" className="form-button">Agregar tarea</button>
        </form>
    );

}

export default TaskForm;
