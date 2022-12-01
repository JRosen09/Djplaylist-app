import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Addsong from "./components/Addsong";
import SongList from "./components/SongList";
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
        <Route path="songlist" element={<SongList />} />
      </Routes>
    </div>
  );
}

export default App;
