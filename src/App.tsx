import Header from "./components/Header";
import Footer from "./components/Footer";
import type { TaskType } from "./types/Task";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import CreateTaskPage from "./pages/CreateTaskPage";
import TaskBoardPage from "./pages/TaskBoardPage";

const apiUrl = "http://localhost:3001/api/tasks";

const App = () => {
  const [taskState, setTaskState] = useState<TaskType[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Can't fetch");
      }
      const result: TaskType[] = await response.json();
      console.log(result);
      setTaskState(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const executeFetch = async () => {
      await fetchTasks();
    };
    executeFetch();
  }, []);

  const addNewTask = async (
    newTask: Omit<TaskType, "id" | "status"> & {
      status?: "todo" | "doing" | "done";
    },
  ) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      if (!response.ok) {
        throw new Error(`Failed to create task: ${response.status}`);
      }

      await fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<TaskBoardPage tasks={taskState}></TaskBoardPage>}
        ></Route>
        <Route
          path="/create"
          element={<CreateTaskPage onAddTask={addNewTask}></CreateTaskPage>}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
