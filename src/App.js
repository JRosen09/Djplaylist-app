import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Addsong from "./components/Addsong";
import Songcard from "./components/Songcard";
import Removesong from "./components/Removesong";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      {location.pathname !== "/" ? <Header /> : null}
      <Routes>
        <Route index element={<Home />} />
        <Route path="addsong" element={<Addsong />} />
        <Route path="viewsongs" element={<Songcard />} />
      </Routes>
    </div>
  );
}

export default App;
