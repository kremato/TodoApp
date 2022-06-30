import { Landing } from "./components/Landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoList } from "./components/TodoList/TodoList";
import { Box, Stack } from "@mui/material";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalogue/:id" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
