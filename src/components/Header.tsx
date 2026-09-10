import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Task Board</h1>
        <p>A simple task board built with React, TypeScript, and components.</p>
        <nav>
          <Link to="/">Tasks</Link>
          <Link to="/create">Create Task</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
