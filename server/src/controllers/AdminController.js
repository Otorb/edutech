import { Admin } from "../models/index.js";
import { hahedPassword } from "../utils/hasPassword.js";


export async function newAdmin(

  email,
  password,
 
) {
  const user = await Admin.findOne({ where: { email } });
  if (user) {
    throw new Error("El administrador ya existe");
  }
console.log('entreee');
  const userHashedPassword = await hahedPassword(password);
  const admin = await Admin.create({
    
    email,
    password: userHashedPassword,
   
  });
  console.log(admin,'sali');
  return admin;
}


// export const newAdmin = async (req, res, next) => {
//   try {
//     const hashedPassword = await hahedPassword(req.body.password);
//     const nuevoAdmin = await Admin.create({
//       ...req.body,
//       password: hashedPassword,
//     });
//     if (!Admin)
//       return res
//         .status(401)
//         .send({ message: "El usuario no ha podido ser creado, lo siento. " });
//     res
//       .status(200)
//       .send({ message: "Aministrador, creado con éxito", nuevoAdmin });
//   } catch (e) {
//     next(e);
//   }
// };


//TRAER TODOS LOS ADMIN

export const admins = async (req, res, next) => {
  try {
    const aministradores = await Admin.findAll({
      // include: { model: Historiaclinica },
    });
    if (aministradores.length === 0)
      return res.status(404).send({ message: "No se encontraron usuarios" });
    res.status(200).send(aministradores);
  } catch (e) {
    next(e);
  }
};
