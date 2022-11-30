require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { sequelize } = require("./util/database");
const { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(cors());

const { Songs } = require("./models/songs");
const { addSong, getAllSongs, deleteSong } = require("./controller");

app.get("/get_songs", getAllSongs);

app.delete("/delete_song/:id", deleteSong);

app.post("/add_song", addSong);

sequelize
  .sync()
  .then(() => {
    app.listen(SERVER_PORT, console.log(`Beam me up Scotty ${SERVER_PORT}!`));
  })
  .catch((err) => console.log(err));
