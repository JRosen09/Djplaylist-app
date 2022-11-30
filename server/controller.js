const { Songs } = require("./models/songs");

module.exports = {
  addSong: async (req, res) => {
    console.log("hit");
    try {
      const { artist, songtitle, bpms, energy } = req.body;
      console.log(artist, songtitle, bpms, energy);
      await Songs.create({ artist, songtitle, bpms, energy });
      res.sendStatus(200);
    } catch (error) {
      console.log(`Error In addSong`);
      console.log(error);
      res.sendStatus(400);
    }
  },

  getAllSongs: async (req, res) => {
    console.log("returning all songs");

    try {
      const songs = await Songs.findAll({});
      res.status(200).send(songs);
    } catch (error) {
      console.log("ERROR IN getAllPosts");
      console.log(error);
      res.sendStatus(400);
    }
  },

  deleteSong: async (req, res) => {
    console.log("deletehit");
    try {
      const { id } = req.params;
      await Songs.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.log(`Error In deleteSong`);
      console.log(error);
      res.sendStatus(400);
    }
  },
};
