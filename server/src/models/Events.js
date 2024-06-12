import { DataTypes } from "sequelize";

export default function Historials(sequelize) {
  const Events = sequelize.define(
    "Events",
    {
      idHistorial: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      message: {
        type: DataTypes.TEXT,
      },
      date: {
        type: DataTypes.STRING,
      },
      hour: {
        type: DataTypes.DATE,
      },
    }
  );
  return Events;
}
