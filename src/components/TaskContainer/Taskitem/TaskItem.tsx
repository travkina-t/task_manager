const TaskItem = ({ task, provided }) => {
    const classPriority =
        task.priority === "high"
            ? "point red"
            : task.priority === "medium"
              ? "point yellow"
              : "point green";


    const classStatus = task.status === "todo"
            ? "task todo"
            : task.status === "in-progress"
              ? "task in-progress"
              : "task done";         

    return (
        <div
            className={classStatus}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <h3 className="task__title">{task.title}</h3>
            <div className="task__info">
                <div className="task__priority-wrapper">
                    <div className={classPriority}></div>
                    <p className="task__priority">{task.priority}</p>
                </div>

                <p className="task__date">{task.createdAt}</p>
            </div>
        </div>
    );
};

export default TaskItem;
