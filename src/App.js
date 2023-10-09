import Todo from "./components/Todo";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/todo" Component={Todo}></Route>
      </Routes>
    </>
  );
}

export default App;
