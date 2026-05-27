import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Paciente = sequelize.define("paciente", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        tableName: "pacientes",
        timestamps: false
    });