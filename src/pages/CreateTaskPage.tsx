import { useNavigate } from "react-router";
import type { NewTaskType } from "../types/Task";
import NewTaskForm from "../components/NewTaskForm";

type CreateTaskPageProps = {
  onAddTask: (task: NewTaskType) => Promise<void>;
};

const CreateTaskPage = ({ onAddTask }: CreateTaskPageProps) => {
  const navigate = useNavigate();

  const executeOnAddTask = async (newTask: NewTaskType) => {
    await onAddTask(newTask);

    navigate("/");
  };

  return (
    <main>
      <section className="new-task-form">
        <h2>Add New Task</h2>
        <NewTaskForm onAddTask={executeOnAddTask} />
      </section>
    </main>
  );
};

export default CreateTaskPage;
