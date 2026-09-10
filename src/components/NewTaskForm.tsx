import { useState } from "react";
import type { NewTaskType, TaskPriority, TaskStatus } from "../types/Task";

type NewTaskFormProps = {
  onAddTask: (task: NewTaskType) => void;
};

const NewTaskForm = ({ onAddTask }: NewTaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("low");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState<TaskStatus>("todo");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask: NewTaskType = {
      title,
      description,
      assignee,
      priority,
      category,
      status,
    };

    console.log("Submitted Task:", newTask);

    onAddTask(newTask);

    // Reset form
    setTitle("");
    setDescription("");
    setAssignee("");
    setPriority("low");
    setCategory("");
    setStatus("todo");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Task Title</label>
      <input
        id="title"
        type="text"
        placeholder="Task Title"
        value={title}
        required
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="description">Task Description</label>
      <textarea
        id="description"
        placeholder="Task Description"
        value={description}
        required
        onChange={(event) => setDescription(event.target.value)}
      />

      <label htmlFor="assignee">Assignee</label>
      <input
        id="assignee"
        type="text"
        placeholder="Assignee"
        value={assignee}
        required
        onChange={(event) => setAssignee(event.target.value)}
      />

      <label htmlFor="priority">Priority</label>
      <select
        id="priority"
        value={priority}
        required
        onChange={(event) =>
          setPriority(event.target.value as TaskPriority)
        }
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <label htmlFor="category">Category</label>
      <input
        id="category"
        type="text"
        placeholder="Category"
        value={category}
        required
        onChange={(event) => setCategory(event.target.value)}
      />

      <label htmlFor="status">Status</label>
      <select
        id="status"
        value={status}
        required
        onChange={(event) =>
          setStatus(event.target.value as TaskStatus)
        }
      >
        <option value="todo">To Do</option>
        <option value="doing">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button type="submit" className="btn btn-submit">
        Add Task
      </button>
    </form>
  );
};

export default NewTaskForm;