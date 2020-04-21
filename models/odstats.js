'use strict';
module.exports = (sequelize, DataTypes) => {
  const odstats = sequelize.define('odstats', {
    Year: DataTypes.INTEGER,
    State: DataTypes.STRING,
    County: DataTypes.STRING,
    Population: DataTypes.STRING,
    DeathRate: DataTypes.DECIMAL
  }, {});
  odstats.associate = function(models) {
    // associations can be defined here
  };
  return odstats;
};