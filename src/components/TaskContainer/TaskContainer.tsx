import "./TaskContainer.css"
import TaskItem from "./Taskitem/TaskItem";

const TaskContainer = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => {
                return (
                    <TaskItem task={task}/>
                );
            })}
        </div>
    );
};

export default TaskContainer;
