import axios from "axios";
import { React, useState, useEffect } from "react";

function Songcard() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4747/get_songs").then((res) => {
      setSongs(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Songs Go Here in a List</h1>
      {/* Render a list of songs */}
      {/* https://reactjs.org/docs/lists-and-keys.html */}

      {/* If that link doesnt make sense, google "how to render lists in react" */}
      {console.log(songs)}
    </div>
  );
}

export default Songcard;
