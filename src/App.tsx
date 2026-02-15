import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TaskContainer from "./components/TaskContainer/TaskContainer";
import { Task } from "./components/TaskContainer/Tasks";

function App() {

    const [tasks, setTasks] = useState<Task[]>([
      {id: "1", title: "Task1", priority: "low", createdAt: "12.02", status: "in-progress" },
      {id: "2", title: "Task2", priority: 'medium', createdAt: "14.02", status: "todo" },
        {id: "3", title: "Task2", priority: 'high', createdAt: "04.02", status: "done" }
    ]);

    return (
        <div className="App">
            <Header setTasks={setTasks} />
            <TaskContainer tasks={tasks} setTasks={setTasks}/>
        </div>
    );
}

export default App;
