import { useState } from "react";
import CustomActionMenu from "./Components/CustomActionMenu";

// export const CursoAlumno = [
//   {
//       idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c",
//       curso: "1ero A",
//       studentId: "16bed2cd-5945-4214-977c-ad4af9133c66",
//       idSubject: null,
//       Subjects: [
//           {
//               idSubject: "31bc6116-5b5b-4404-be00-5de29fbd1c0c",
//               subjec: "Biologia",
//               idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c"
//           },
//           {
//               idSubject: "c420818f-1b9f-48e6-af3f-d7ef6bdc685a",
//               subjec: "Fisica",
//               idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c"
//           },
//           {
//               idSubject: "8735262b-0970-4c5c-a6e5-25ddc201b4e5",
//               subjec: "Quimica",
//               idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c"
//           }
//       ]
//   },
//   {
//       idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c",
//       curso: "2do A",
//       studentId: "16bed2cd-5945-4214-977c-ad4af9133c66",
//       idSubject: null,
//       Subjects: [
//           {
//               idSubject: "31bc6116-5b5b-4404-be00-5de29fbd1c0c",
//               subjec: "Literatura",
//               idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c"
//           },
//           {
//               idSubject: "c420818f-1b9f-48e6-af3f-d7ef6bdc685a",
//               subjec: "Ingles",
//               idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c"
//           },
//           {
//               idSubject: "8735262b-0970-4c5c-a6e5-25ddc201b4e5",
//               subjec: "Geografia",
//               idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c"
//           }
//       ]
//   },
//   {
//       idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c",
//       curso: "3ero A",
//       studentId: "16bed2cd-5945-4214-977c-ad4af9133c66",
//       idSubject: null,
//       Subjects: [
//           {
//               idSubject: "31bc6116-5b5b-4404-be00-5de29fbd1c0c",
//               subjec: "Dibujo",
//               idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c"
//           },
//           {
//               idSubject: "c420818f-1b9f-48e6-af3f-d7ef6bdc685a",
//               subjec: "Ed Fisica",
//               idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c"
//           },
//           {
//               idSubject: "8735262b-0970-4c5c-a6e5-25ddc201b4e5",
//               subjec: "Computacion",
//               idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c"
//           }
//       ]
//   },
//   {
//       idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c",
//       curso: "1ero A",
//       studentId: "16bed2cd-5945-4214-977c-ad4af9133c66",
//       idSubject: null,
//       Subjects: [
//           {
//               idSubject: "31bc6116-5b5b-4404-be00-5de29fbd1c0c",
//               subjec: "Biologia",
//               idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c"
//           },
//           {
//               idSubject: "c420818f-1b9f-48e6-af3f-d7ef6bdc685a",
//               subjec: "Fisica",
//               idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c"
//           },
//           {
//               idSubject: "8735262b-0970-4c5c-a6e5-25ddc201b4e5",
//               subjec: "Quimica",
//               idCurso: "d34ebe8f-10b3-40c9-b723-5d12a1b6d84c"
//           }
//       ]
//   },
// ]




export const data = [
  {
    materia: "Lengua",
    curso: "1A",
    curso: "2A",
    // email: "juan.perez@example.com",
    // telefono: "+54 11 1234 5678",
    // rol: "Administrador",
    // estado: "Activo",
  },
  {
    materia: "Ingles",
    curso: "1A",
    curso: "2A",
    // email: "maria.gomez@example.com",
    // telefono: "+54 11 8765 4321",
    // rol: "Usuario",
    // estado: "Activo",
  },
  {
    materia: "Ciencias Naturales",
    curso: "1A",
    curso: "2A",
    // email: "carlos.rodriguez@example.com",
    // telefono: "+54 11 2345 6789",
    // rol: "Moderador",
    // estado: "Inactivo",
  },
  {
    materia: "Ciencias Sociales",
    curso: "1A",
    curso: "2A",
    // email: "laura.martinez@example.com",
    // telefono: "+54 11 3456 7890",
    // rol: "Usuario",
    // estado: "Activo",
  },
  {
    materia: "Matematica",
    curso: "1A",
    curso: "2A",
    // email: "pedro.fernandez@example.com",
    // telefono: "+54 11 4567 8901",
    // rol: "Administrador",
    // estado: "Inactivo",
  },
  {
    materia: "Fisica",
    curso: "1A",
    curso: "2A",
    // email: "ana.torres@example.com",
    // telefono: "+54 11 5678 9012",
    // rol: "Usuario",
    // estado: "Activo",
  },
  {
    materia: "Quimica",
    curso: "1A",
    curso: "2A",
    // email: "jorge.lopez@example.com",
    // telefono: "+54 11 6789 0123",
    // rol: "Moderador",
    // estado: "Activo",
  },
  {
    materia: "Dibujo",
    curso: "1A",
    curso: "2A",
    // email: "Dibujoexample.com",
    // telefono: "+54 11 7890 1234",
    // rol: "Usuario",
    // estado: "Inactivo",
  },
 
  {
    materia: "Geografia",
    curso: "1A",
    curso: "2A",
    // email: "elena.navarro@example.com",
    // telefono: "+54 11 9012 3456",
    // rol: "Usuario",
    // estado: "Activo",
  },
  {
    materia: "Historia",
    curso: "1A",
    curso: "2A",
    // email: "elena.navarro@example.com",
    // telefono: "+54 11 9012 3456",
    // rol: "Usuario",
    // estado: "Activo",
  },
];


