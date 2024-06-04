import { DataTypes } from "sequelize";

export default function Curso(sequelize) {
  const Curso = sequelize.define("Curso", {
    idCurso: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    curso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return Curso;
}
