import FilteredTasks from "./FilteredTasks/FilteredTasks";
import "./TaskContainer.css";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";

const TaskContainer = ({ tasks, setTasks }) => {
    const statusBar = ["todo", "in-progress", "done"];

    const handleDragEnd = (result: DropResult) => {
        const { source, destination, draggableId } = result;

        if (!destination) return;

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        const changedTasks = tasks.map((task) => {
            if (task.id === draggableId) {
                return {
                    ...task,
                    status: destination.droppableId,
                };
            }
            return task;
        });

        setTasks(changedTasks);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="columns">
                {statusBar.map((status, i) => {
                    return (
                        <Droppable droppableId={status} key={i}>
                            {(provided) => (
                                <div
                                    className={`column ${status}`}
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}>
                                    <FilteredTasks
                                        tasks={tasks}
                                        status={status}
                                    />
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    );
                })}
            </div>
        </DragDropContext>
    );
};

export default TaskContainer;
