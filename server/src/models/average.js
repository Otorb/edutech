import { DataTypes } from "sequelize";

export default function Average(sequelize) {
  const Promedio = sequelize.define("Promedio", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    note: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return Promedio;
}
