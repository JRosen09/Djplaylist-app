import React from "react";
import styles from "./styles/header.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Just like MUSIC</h1>
      <h3>Music will always be there for you</h3>
      <Link to="/addsong">
        <button> Get Started </button>
      </Link>
    </div>
  );
}

export default Home;
