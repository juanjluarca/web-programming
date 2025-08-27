import '../index.css'

function ToDoCard({
    id,
    title = "Default",
    description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum harum unde quo temporibus deserunt consequuntur totam, est sapiente? Impedit quaerat tempore aspernatur nobis quam aut, tempora hic. Laudantium, consequuntur Facilis debitis corporis repellendus enim porro natus, similique ullam.",
    status = "Pendiente",
    onDelete,
    onToggleComplete
}) {
    return (
        <article className="to-do-item">
            <div className="to-do-title">
                <h2>{title}</h2>
            </div>
            <div className="to-do-description">
                <p>{description}</p>
            </div>
            <div className="to-do-status">
                <span className={`status-item ${status}`}>Status: {status}</span>
            </div>
            <div className="to-do-actions">
                <button className='to-do-button' onClick={() => onToggleComplete(id)}>
                    {status === "Pendiente" ? "Marcar completada" : "Marcar pendiente"}
                </button>
                <button className='to-do-button' onClick={() => onDelete(id)}>Eliminar</button>
            </div>
        </article>
    );
}

export default ToDoCard;