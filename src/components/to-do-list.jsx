import ToDoCard from "./to-do-item";
import '../index.css'

function ToDoList({ tasks = [], onDeleteTask, onToggleComplete }) {
  if (tasks.length === 0) {
    return <p className="no-tasks">No hay tareas disponibles</p>;
  }

  return (
    <section className="to-do-list">
      {tasks.map((task) => (
        <ToDoCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          status={task.completed ? "Completada" : "Pendiente"}
          onDelete={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </section>
  );
}

export default ToDoList;
