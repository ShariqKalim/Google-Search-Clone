import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/Search" Component={Search} />
      </Routes>
    </>
  );
}

export default App;
