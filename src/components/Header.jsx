import React from "react";
import styles from "./styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section>
      <h1>Make a Dj Playlist</h1>
      <div className="nav">
        <Link to="/addsong">
          <button className="btn"> Add Song </button>
        </Link>
        <Link to="/songlist">
          <button className="btn">View Song List</button>
        </Link>
      </div>
    </section>
  );
}

export default Header;
