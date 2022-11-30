import axios from "axios";
import { React, useState, useEffect } from "react";
import Songdetails from "./Songdetails";

function Songcard() {
  const [songs, setSongs] = useState([]);
  const getAllSongs = () => {
    axios.get("http://localhost:4747/get_songs").then((res) => {
      setSongs(res.data);
    });
  };

  useEffect(() => {
    getAllSongs();
  }, []);

  return (
    <div>
      <h1>Song List</h1>
      {songs.map((song) => (
        <Songdetails song={song} getAllSongs={getAllSongs} />
      ))}

      {console.log(songs)}
    </div>
  );
}

export default Songcard;
