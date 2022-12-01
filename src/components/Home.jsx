import React from "react";
import styles from "./styles/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="main">
      <div className="main-row-text">
        <h1>Create your MUSIC playlist</h1>
        <p>"Music will always be there for you"</p>
        <Link to="/addsong">
          <button className="btn"> Get Started </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
