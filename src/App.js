import "./App.scss";
import Header from "./components/Header/Header";
import TaskList from "./components/Tasks/TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
