import React from "react";
import axios from "axios";

function Songdetails({ song, getAllSongs }) {
  const removeSong = () => {
    axios.delete(`http://localhost:4747/delete_song/${song.id}`).then((res) => {
      getAllSongs();
    });
  };
  return (
    <div className="songlist">
      <h3>{song.songtitle}</h3>
      <h3>{song.artist}</h3>
      <h3>{song.bpms}</h3>
      <h3>{song.energy}</h3>
      <button onClick={removeSong}>Remove Song</button>
    </div>
  );
}

export default Songdetails;
