import { DataTypes } from "sequelize";

export default function Events(sequelize) {
  const Events = sequelize.define(
    "Events",
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
    },
    {
      timestamps: false,
    }
  );
  return Events;
}
