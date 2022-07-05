import "./App.css";
import dayjs from "dayjs";
import { Tasks } from "./components/Tasks"

function App() {
  return (
    <div className="container">
      <header className="d-flex justify-content-between my-4 bg-dark text-light">
        <span>Today</span>
        <span>{dayjs().format("MMM DD, YYYY")}</span>
      </header>

      <Tasks />
    </div>
  );
}

export default App;
