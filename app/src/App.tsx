import { Landing } from "./components/Landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoList } from "./components/TodoList/TodoList";
import { ThemeProvider, Stack } from "@mui/material";
import { theme } from "./Utils/themes"

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
