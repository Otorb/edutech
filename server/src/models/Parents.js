import { DataTypes } from "sequelize";

export default function Parents(sequelize) {
  const Parents = sequelize.define(
    "Parents",
    {
      parentId: {
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
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: null,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: null,
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
      role: {
        type: DataTypes.STRING,
        defaultValue: "parent",
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Parents;
}
