export type TaskStatus = "todo" | "doing" | "done";
export type TaskPriority = "low" | "medium" | "high";

export type TaskType = {
  id: number;
  title: string;
  description: string;
  category: string;
  assignee: string;
  priority: TaskPriority;
  status: TaskStatus;
};


export type NewTaskType = Omit<TaskType, "id" | "status"> & { status?: TaskStatus };