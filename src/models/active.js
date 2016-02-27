"use strict";

module.exports = function(sequelize, DataTypes){

    var Active = sequelize.define('Active', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        portifolio_id:{
             type: DataTypes.INTEGER
        },
        amount:{
            type: DataTypes.FLOAT
        },
        profit:{
            type: DataTypes.FLOAT
        }
        quantity:{
            type: DataTypes.INTEGER
        },
        date_buy:{
            type: DataTypes.DATE
        },
        creation_date: {
            type: DataTypes.DATE
        },
        update_date: {
            type: DataTypes.DATE
        }
    });

    return Active;
}
