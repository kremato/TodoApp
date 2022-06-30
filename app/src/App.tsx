import "./App.css";
import { Landing } from "./components/Landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalogue/:id" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
