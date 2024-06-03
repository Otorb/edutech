// models/index.js
import StudentsModel from "./Students.js";
import HistorialsModel from "./Historials.js";
import { sequelize } from "../../db.js";
import AdminModel from "./Admin.js";
import TeachersModel from "./Teachers.js";
import NotasModel from "./Notas.js";
import AverageModel from "./average.js";
import SubjectModel from "./Subject.js";
import ParentsModel from "./Parents.js";
import CursoModel from "./Curso.js";

const Admin = AdminModel(sequelize);
const Students = StudentsModel(sequelize);
const Historials = HistorialsModel(sequelize);
const Teachers = TeachersModel(sequelize);
const Notas = NotasModel(sequelize);
const Promedio = AverageModel(sequelize);
const Subject = SubjectModel(sequelize);
const Parents = ParentsModel(sequelize);
const Curso = CursoModel(sequelize);

//? Relaciones Parents y Students
Parents.hasMany(Students, { foreignKey: "parentId" });
Students.belongsTo(Parents, { foreignKey: "parentId" });
//! Relaciones historials y students

//* Parents.hasMany(Historials, { foreignKey: 'parentId' });
//* Historials.belongsTo(Parents, { foreignKey: 'parentId' });

//************************************************************************** */
// Definir relaciones aquí
// Students.hasMany(Historials, { foreignKey: "studentId" });
// Historials.belongsTo(Students, { foreignKey: "studentId" });

Students.hasMany(Teachers, { foreignKey: "id" });
Teachers.belongsTo(Students, { foreignKey: "teacherId" });

// Students.hasMany(Promedio, { foreignKey: "studentId" });
// Promedio.hasOne(Students, { foreignKey: "studentId" });

Promedio.hasMany(Notas, { foreignKey: "promedioId" });
Notas.hasOne(Promedio, { foreignKey: "promedioId" });

Subject.hasMany(Historials, { foreignKey: "idSubject" });
Historials.belongsTo(Subject, { foreignKey: "idSubject" });

Subject.hasMany(Notas, { foreignKey: "idSubject" });
Notas.hasOne(Subject, { foreignKey: "idSubject" });

Subject.hasOne(Promedio, { foreignKey: "idSubject" });
Promedio.hasOne(Subject, { foreignKey: "idSubject" });

Curso.hasMany(Subject, { foreignKey: "studentId" });
Subject.hasMany(Curso, { foreignKey: "studentId" });

Students.hasMany(Subject, { foreignKey: "studentId" });
Subject.hasMany(Students, { foreignKey: "studentId" });

Students.hasMany(Notas, { foreignKey: "studentId" });
Notas.hasOne(Students, { foreignKey: "studentId" });

export {
  Students,
  Historials,
  Admin,
  Teachers,
  Notas,
  Promedio,
  Subject,
  Parents,
  Curso,
};
