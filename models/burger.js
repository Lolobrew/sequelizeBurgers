module.exports = function(sequelize, Datatypes) {
  var Burger = sequelize.define("Burger", {
    name: {
      type: Datatypes.STRING,
    },
    devoured: {
      type: Datatypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Burger;
}