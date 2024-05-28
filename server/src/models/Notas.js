import { DataTypes } from "sequelize";

export default function Notas(sequelize) {
  const Notas = sequelize.define("Notas", {
    idNotas: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    detail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nota: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateTest: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
  });

  return Notas;
}
