import React from "react";
import axios from "axios";
import { useState } from "react";
import styles from "./styles/addsong.css";

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
    console.log(body);
    axios
      .post("http://localhost:4747/add_song", body)
      .then((res) => {
        setArtist("");
        setsongTitle("");
        setbpms("");
        setenergy("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="entersong">
      <h1>Create your song list</h1>
      <form onSubmit={(e) => addsongrequest(e)}>
        <input
          onChange={(e) => setArtist(e.target.value)}
          type="text"
          placeholder="Artist"
          value={artist}
        />
        <input
          onChange={(e) => setsongTitle(e.target.value)}
          type="text"
          placeholder="Song Title"
          value={songtitle}
        />
        <input
          onChange={(e) => setbpms(e.target.value)}
          type="text"
          placeholder="BPMs"
          value={bpms}
        />
        <input
          onChange={(e) => setenergy(e.target.value)}
          type="text"
          placeholder="Energy 1-10"
          value={energy}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Addsong;
