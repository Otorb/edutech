import { DataTypes } from "sequelize";

export default function Admin(sequelize) {
  const Students = sequelize.define(
    "admin",
    {
      email: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      rol: {
        type: DataTypes.STRING,
        defaultValue: "admin",
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Students;
}
