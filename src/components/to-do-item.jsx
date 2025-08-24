import '../index.css'

function ToDoCard({
    title = "Default",
    description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum harum unde quo temporibus deserunt consequuntur totam, est sapiente? Impedit quaerat tempore aspernatur nobis quam aut, tempora hic. Laudantium, consequuntur Facilis debitis corporis repellendus enim porro natus, similique ullam.",
    status = "Pendiente"
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
                <span className='status-item'>Status: {status}</span>
            </div>
        </article>
    );
}

export default ToDoCard;