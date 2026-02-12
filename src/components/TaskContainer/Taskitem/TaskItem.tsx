const TaskItem = ({ task }) => {
    return (
        <div className="task">
            <h3 className="task__title">{task.title}</h3>
            <div className="task__info">
                <div className="task__priority-wrapper">
                    <div
                        className={
                            task.priority === "high"
                                ? "point red"
                                : task.priority === "medium"
                                  ? "point yellow"
                                  : "point green"
                        }></div>
                    <p className="task__priority">{task.priority}</p>
                </div>

                <p className="task__date">{task.createdAt}</p>
            </div>
        </div>
    );
};

export default TaskItem;
