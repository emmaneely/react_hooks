import { useEffect, useState } from "react";
import { APIService } from "../data/API.service";
import { TaskForm } from "./TaskForm";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const Tasks = (props) => {
    const [tasks, setTasks] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    const fetchTasks = async () => {
        let list = await APIService.getTasks();
        setTasks(list);
    };

    const addTask = (content, dueDate, priority) => {
        let updatedTasks = [...tasks, { content, dueDate, priority }];
        setTasks(updatedTasks);
    }

    useEffect(() => {
        fetchTasks()
    }, []);

    return (
        <div className="row">
            <div className="col-md-6">
                <TaskForm onSubmit={addTask} />
            </div>
            <div className="col-md-6">
                <ul className="list-group">
                    {tasks.map((t, idx) => (
                        <li className="list-group-item d-flex justify-content-between" key={t + idx}
                        >
                            <span>{t.content}</span>
                            <span className={`text-${dayjs().isBefore(t.dueDate) ? "dark" : "danger"}`}
                            >
                                {dayjs().to(dayjs(t.dueDate))}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}