import React from "react";
import styles from "./styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav">
      <h1>Make a Dj Playlist</h1>
      <Link to="/addsong">
        <button> add a song </button>
      </Link>
      <Link to="/viewsongs">
        <button>viewsongs</button>
      </Link>
      <Link to="removesong">
        <button>remove a song</button>
      </Link>
    </div>
  );
}

export default Header;
