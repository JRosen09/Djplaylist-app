import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Addsong from "./components/Addsong";
import Songcard from "./components/Songcard";
import Removesong from "./components/Removesong";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="addsong" element={<Addsong />} />
        <Route path="viewsongs" element={<Songcard />} />
        <Route path="removesong" element={<Removesong />} />
      </Routes>
    </div>
  );
}

export default App;
