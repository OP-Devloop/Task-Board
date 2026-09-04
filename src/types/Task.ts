type TaskStatus = "todo" | "doing" | "done";
type TaskPriority = "low" | "medium" | "high";

export type TaskType = {
  id: number;
  title: string;
  description: string;
  category: string;
  assignee: string;
  priority: TaskPriority;
  status: TaskStatus;
};