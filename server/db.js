import { Sequelize } from "sequelize";
import { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } from "./src/config/envs.js";
// import Students from "./src/models/Students.js";
// import Historials from "./src/models/Historials.js";

export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

// Relación Users <-> Cart (uno a uno)
// Students.hasOne(Historials);
// Historials.belongsTo(Students);

export default sequelize;
