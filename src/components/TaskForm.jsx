import { useState } from "react";

export const TaskForm = ({ onSubmit }) => {
    const [content, setContent] = useState("");
    const [dueDate, setDueDate] = useState(new Date().toString());
    const [priority, setPriority] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(content, dueDate, priority);

        setContent("");
        setDueDate(new Date().toString());
        setPriority("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="content" className="form-label"></label>
                <input
                    type="text"
                    name="content"
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="dueDate" className="form-label"></label>
                <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="priority" className="form-label"></label>
                <input
                    type="range"
                    name="priority"
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="form-control"
                    min={0}
                    max={3}
                    step={1}
                />
            </div>
            <button className="btn" type="submit">
                Add
            </button>
        </form>
    )
}