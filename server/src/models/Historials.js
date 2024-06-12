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
      teacherName: {
        type: DataTypes.STRING,
      },
      course: {
        type: DataTypes.STRING,
      },
      hour: {
        type: DataTypes.DATE,
      },
    }
  );
  return Historials;
}
