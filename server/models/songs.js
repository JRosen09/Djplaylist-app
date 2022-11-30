const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

module.exports = {
  Songs: sequelize.define("songs", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    artist: DataTypes.STRING,
    songtitle: DataTypes.STRING,
    bpms: DataTypes.INTEGER,
    energy: DataTypes.INTEGER,
  }),
};
