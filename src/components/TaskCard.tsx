type TaskCardProps = { 
  id: number; 
  title: string; 
  description: string; 
  category: string; 
  assignee: string; 
  priority: "low" | "medium" | "high"; 
  status: "todo" | "doing" | "done"; };

const TaskCard = ({ 
  category, 
  title, 
  description, 
  assignee, 
  priority, 
  status, 
}: TaskCardProps) => {
  return (
    <article className={`task-card ${priority}`}>
      <header className="task-card-header">
        <h3 className="task-card-title">{title}</h3>

        <span className={`task-card-priority ${priority}`}>{priority}</span>
      </header>

      <p className="task-card-description">{description}</p>

      <footer className="task-card-footer">
        <span className="task-card-category">{category}</span>

        <span className={"task-card-status ${status}"}> {status} </span>

        <span className="task-card-person-assigned">{assignee}</span>
      </footer>
    </article>
  );
};

export default TaskCard;
