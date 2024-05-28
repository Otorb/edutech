import { DataTypes } from "sequelize";

export default function Historials(sequelize) {
  const Historials = sequelize.define(
    "Historials",
    {
      idHistorial: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      message: {
        type: DataTypes.TEXT,
      },
      date: {
        type: DataTypes.STRING,
      },
      teacherName: {
        type: DataTypes.STRING,
      },
      course: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Historials;
}
