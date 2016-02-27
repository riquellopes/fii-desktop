"use strict";

module.exports = function(sequelize, DataTypes){

    var Portifolio = sequelize.define('Portifolio', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        creation_date: {
            type: DataTypes.DATE
        },
        update_date: {
            type: DataTypes.DATE
        }
    });

    return Portifolio;
}
