import React from "react";
import axios from "axios";
import { useState } from "react";

function Addsong() {
  const [artist, setArtist] = useState("");
  const [songtitle, setsongTitle] = useState("");
  const [bpms, setbpms] = useState("");
  const [energy, setenergy] = useState("");
  const addsongrequest = (e) => {
    e.preventDefault();
    const body = {
      artist,
      songtitle,
      bpms,
      energy,
    };
    axios
      .post("http://localhost:4747/add_song", body)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Create your song list</h1>
      <form onSubmit={(e) => addsongrequest(e)}>
        <input
          onChange={(e) => setArtist(e.target.value)}
          type="text"
          placeholder="Artist"
        />
        <input
          onChange={(e) => setsongTitle(e.target.value)}
          type="text"
          placeholder="Song Title"
        />
        <input
          onChange={(e) => setbpms(e.target.value)}
          type="text"
          placeholder="BPMs"
        />
        <input
          onChange={(e) => setenergy(e.target.value)}
          type="text"
          placeholder="Energy 1-10"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Addsong;
