import { useState } from "react";
import { Task, Priority } from "../../TaskContainer/Tasks";
import { formatDate } from "../../../helpers/dates";

const Form = ({ setTasks, closeModal }) => {
    const priorities = ["low", "medium", "high"];

    const [newTask, setNewTask] = useState<Task>({
        title: "",
        id: Date.now().toString(),
        priority: "low",
        createdAt: formatDate(new Date()),
        description: "",
        status: "todo",
    });

    const addTask = () => {
        setTasks((tasks) => [...tasks, newTask]);
        closeModal()
    };
    return (
        <form>
            <input
                type="text"
                placeholder="Название задачи"
                value={newTask.title}
                onChange={(event) =>
                    setNewTask({ ...newTask, title: event.target.value })
                }
            />
            <input
                type="text"
                placeholder="Описание задачи"
                value={newTask.description}
                onChange={(event) =>
                    setNewTask({ ...newTask, description: event.target.value })
                }
            />
            <select
                name="priority"
                id="priority"
                value={newTask.priority}
                onChange={(event) =>
                    setNewTask({
                        ...newTask,
                        priority: event.target.value as Priority,
                    })
                }>
                {priorities.map((el) => {
                    return <option value={el}>{el}</option>;
                })}
            </select>
            <button
                onClick={(event) => {
                    event.preventDefault();
                    addTask();
                }}>
                Add
            </button>
        </form>
    );
};

export default Form;
