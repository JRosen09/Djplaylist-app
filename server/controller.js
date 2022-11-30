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

  // Delete Songs Method
  // very similar functionality as addSong on line 4
  // You just need to remove the song from the model
};
