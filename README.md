# Documentación solicitada - Homework-04

A continuación se presenta la explicación de los hooks utilizados y el acceso público a la aplicación desplegada.

---

## Hooks utilizados en el proyecto
- UseState
  - Se creó este hook para obtener el listado de tareas que estén almacenadas dentro del localStorage del navegador. setTasks es utilizado en la función handleAddTask, handleDeleteTask y handleToggleComplete.
    - ```
        const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
      });
      ```

  - Se creó este hook para guardar el filtro que se esté aplicando en memoria (para saber qué tareas se estarán mostrando), se inicializa por defecto en "1" para mostrar todas las tareas, tanto filterStatus como setFilterStatus son enviados al componente StatusSelector para poder realizar los cambios de estado desde ese componente.
    - ```
        const [filterStatus, setFilterStatus] = useState(1); // 1 = Todas, 2 = Completadas, 3 = Pendientes
      ```
- UseEffect  
    - Se creó este hook para que cada vez que se modifique la lista de tareas (al agregar, eliminar, marcar como completada o como pendiente), se actualice automáticamente en el localStorage. Tiene una dependencia con [tasks], lo que asegura que se ejecutará solo cuando el estado de tasks cambie.
      - ```
        useEffect(() => {
          localStorage.setItem("tasks", JSON.stringify(tasks));
        }, [tasks]);
        ```

        

## URL del CDN de CloudFront

URL pública del CDN para acceso al contenido desplegado:

[¡Click aquí para acceder al contenido desplegado!](https://d1v1irb2dydmrz.cloudfront.net/)

---
