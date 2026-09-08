import { useState } from "react";
import type { NewTaskType } from "../types/Task";
import type { TaskPriority } from "../types/Task";


type NewTaskFormProps = {
  onAddTask: (task: NewTaskType) => void;
};

const NewTaskForm = ({ onAddTask }: NewTaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("low");
  const [category, setCategory] = useState("todo");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    let priorityTemp: TaskPriority = "low";
    if (priority === "medium") {
      priorityTemp = "medium"
    } else
      priorityTemp = "high"

    console.log({
      "Submitted Task": {
        title,
        description,
        assignee,
        priority,
        category,
      },
    });

    onAddTask({
      title,
      description,
      assignee,
      priority: priorityTemp,
      category,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="#" method="POST">
        <label htmlFor="title">Task Title</label>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          required
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="description">Task Description</label>
        <textarea
          placeholder="Task Description"
          value={description}
          required
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="assignee">Assignee</label>
        <input
          type="text"
          placeholder="Assignee"
          value={assignee}
          required
          onChange={(event) => setAssignee(event.target.value)}
        />

        <label htmlFor="priority">Priority</label>
        <select
          value={priority}
          required
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <label htmlFor="category">Category</label>
        <select
          value={category}
          required
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="doing">In Progress</option>
          <option value="done">Done</option>
        </select>

        <button type="submit" className="btn btn-submit">
          Add Task
        </button>
      </form>
    </>
  );
};

export default NewTaskForm;
