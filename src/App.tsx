import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";
import Column from "./components/Column";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <section className="task-list">
          <Column title="To Do">
            <TaskCard
              id={1}
              category="Frontend"
              title="Create login form"
              description="Design and implement the user login form."
              assignee="John Doe"
              priority="medium"
            />
          </Column>
          <Column title="In Progress">
            <TaskCard
              id={2}
              category="testing"
              title="Write unit tests"
              description="Create unit tests for the login form functionality."
              assignee="Jane Smith"
              priority="low"
            />
          </Column>
          <Column title="Done">
            <TaskCard
              id={3}
              category="Backend"
              title="Implement authentication"
              description="Set up user authentication and session management."
              assignee="Bob Johnson"
              priority="high"
            />
          </Column>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
