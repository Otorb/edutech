import { DataTypes } from "sequelize";

export default function Students(sequelize) {
  const Students = sequelize.define("Students", {
    studentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthd: {
      type: DataTypes.DATEONLY,
    },
    registration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.name} ${this.lastName}`;
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    rol: {
      type: DataTypes.STRING,
      defaultValue: "student",
    },
  });

  return Students;
}
