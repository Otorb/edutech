import { DataTypes } from "sequelize";

export default function Subject(sequelize) {
  const Subject = sequelize.define("Subject", {
    idSubject: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    subjec: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return Subject;
}
