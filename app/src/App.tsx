import { Landing } from "./components/Landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoList } from "./components/TodoList/TodoList";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      width="100%"
      height="100%"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalogue/:id" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </Stack>
  );
}

export default App;
