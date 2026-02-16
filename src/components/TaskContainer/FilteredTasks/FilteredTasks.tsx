import TaskItem from "../Taskitem/TaskItem";
import { Draggable } from "@hello-pangea/dnd";
const FilteredTasks = ({ tasks, status }) => {
    return (
        <div>
            {tasks
                .filter((el) => el.status === status)
                .map((task, index) => {
                    return (
                        <Draggable
                            key={task.id}
                            draggableId={String(task.id)}
                            index={index}>
                            {(provided) => (
                                <TaskItem task={task} provided={provided} />
                            )}
                        </Draggable>
                    );
                })}
        </div>
    );
};

export default FilteredTasks;
