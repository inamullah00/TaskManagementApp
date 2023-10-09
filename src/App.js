import Todo from "./components/Todo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />}></Route>
      </Routes>
    </>
  );
}

export default App;
