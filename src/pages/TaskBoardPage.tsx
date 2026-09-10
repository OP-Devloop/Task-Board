import Column from "../components/Column";
import TaskCard from "../components/TaskCard";
import type { TaskType } from "../types/Task";

type TaskBoardPageProps = {
  tasks: TaskType[];
};

const TaskBoardPage = ({ tasks }: TaskBoardPageProps) => {
  const toDoTasks: TaskType[] = tasks.filter((task) => task.status === "todo");
  const doingTasks: TaskType[] = tasks.filter((task) => task.status === "doing");
  const doneTasks: TaskType[] = tasks.filter((task) => task.status === "done");

  return (
    <main>
      <section className="task-list">
        <Column title="To Do">
          {toDoTasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              category={task.category}
              title={task.title}
              description={task.description}
              assignee={task.assignee}
              priority={task.priority}
              status={task.status}
            />
          ))}
        </Column>
        <Column title="In Progress">
          {doingTasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              category={task.category}
              title={task.title}
              description={task.description}
              assignee={task.assignee}
              priority={task.priority}
              status={task.status}
            />
          ))}
        </Column>
        <Column title="Done">
          {doneTasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              category={task.category}
              title={task.title}
              description={task.description}
              assignee={task.assignee}
              priority={task.priority}
              status={task.status}
            />
          ))}
        </Column>
      </section>
    </main>
  );
};

export default TaskBoardPage;
