import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";
import Column from "./components/Column";
import type { TaskType } from "./types/Task";
import NewTaskForm from "./components/NewTaskForm";
import { useEffect, useState } from "react";

// const tasks: TaskType[] = [
//   {
//     id: 1,
//     title: "Create login form",
//     description: "Design and implement the user login form.",
//     category: "Frontend",
//     assignee: "John Doe",
//     priority: "medium",
//     status: "todo",
//   },
//   {
//     id: 2,
//     title: "Write unit tests",
//     description: "Create unit tests for the login form functionality.",
//     category: "testing",
//     assignee: "Jane Smith",
//     priority: "low",
//     status: "doing",
//   },
//   {
//     id: 3,
//     title: "Implement authentication",
//     description: "Set up user authentication and session management.",
//     category: "Backend",
//     assignee: "Bob Johnson",
//     priority: "high",
//     status: "done",
//   },
//   {
//     id: 4,
//     title: "Design database schema",
//     description: "Create the database schema for user data.",
//     category: "Backend",
//     assignee: "Alice Brown",
//     priority: "medium",
//     status: "todo",
//   },
//   {
//     id: 5,
//     title: "Set up CI/CD pipeline",
//     description: "Configure continuous integration and deployment.",
//     category: "DevOps",
//     assignee: "Charlie Green",
//     priority: "high",
//     status: "doing",
//   },
//   {
//     id: 6,
//     title: "Update documentation",
//     description: "Review and update the project documentation.",
//     category: "Documentation",
//     assignee: "David Wilson",
//     priority: "low",
//     status: "todo",
//   },
//   {
//     id: 7,
//     title: "Optimize performance",
//     description: "Identify and fix performance bottlenecks.",
//     category: "Backend",
//     assignee: "Eve Adams",
//     priority: "high",
//     status: "doing",
//   },
//   {
//     id: 8,
//     title: "Conduct user testing",
//     description: "Organize and conduct user testing sessions.",
//     category: "UX",
//     assignee: "Frank Miller",
//     priority: "medium",
//     status: "done",
//   },
//   {
//     id: 9,
//     title: "Implement responsive design",
//     description: "Ensure the application is responsive on all devices.",
//     category: "Frontend",
//     assignee: "Grace Lee",
//     priority: "low",
//     status: "done",
//   },
// ];


const apiUrl = "http://localhost:3001/api/tasks";

const App = () => {
  // const [taskid, setTaskId] = useState(tasks.length + 1);
  const [taskState, setTaskState] = useState<TaskType[]>([]);

  const toDoTasks: TaskType[] = taskState.filter(
    (task) => task.status === "todo"
  );
  const doingTasks: TaskType[] = taskState.filter(
    (task) => task.status === "doing"
  );
  const doneTasks: TaskType[] = taskState.filter(
    (task) => task.status === "done"
  );


  const fetchTasks = async () => {
    try{
      const response = await fetch(apiUrl);
      if(!response.ok) {
        throw new Error("Can't fetch")
      }
      const result: TaskType[] = await response.json();
      console.log(result);
      setTaskState(result);

    }catch(error){
      console.log(error);
    }
  };
  useEffect(() => {
    const executeFetch = async() => {
      await fetchTasks();
    };
    executeFetch();
  }, []);


  const addNewTask = async (newTask: Omit<TaskType, "id" | "status"> & { status?: "todo" | "doing" | "done" }) => {
    try{
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask),
      });
      if(!response.ok){
        throw new Error(`Failed to create task: ${response.status}`);
      }

      await fetchTasks();

    }catch(error){
      console.log(error)
    }
    // setTaskState((prevTasks) => [...prevTasks, taskWithIdAndStatus]);
    // setTaskId((prevId) => prevId + 1);
  };

  return (
    <div>
      <Header />

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
        <section className="new-task-form">
          <h2>Add New Task</h2>
          <NewTaskForm onAddTask={addNewTask} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
