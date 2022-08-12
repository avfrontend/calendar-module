import Calendar from "./components/Calendar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Calendar />
      </div>
    </Router>
  );
}

export default App;
