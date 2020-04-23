'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    email: DataTypes.STRING,
    organization: DataTypes.STRING,
    report: DataTypes.STRING
  }, {});
  Report.associate = function(models) {
    // associations can be defined here
    Report.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Report;
};