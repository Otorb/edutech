import { regexEmail, regexPassword } from "../helpers/regexForm.js";
import { regexBirthday } from "../helpers/regexStudents.js";
import { identifyCountry } from "../helpers/regexCountryPhone.js";

export function validateStudents(req, res, next) {
  const {
    name,
    lastName,
    email,
    password,
    phone,
    birthd,
    registration,
    grade,
  } = req.body;
  console.log(`numero de telefono recibido ${phone}`);
  if (
    !name ||
    !lastName ||
    !email ||
    !password ||
    !phone ||
    !birthd ||
    !registration ||
    !grade
  ) {
    return res.status(400).json({
      message: "se requieren todos los campos",
    });
  }
  if (!regexEmail.test(email)) {
    return res.status(400).json({
      message: "el email no es válido",
    });
  }
  // if (!regexPassword.test(password)) {
  //   return res.status(400).json({
  //     message:
  //       "la contraseña debe tener al menos una letra minúscula, una mayúscula, un dígito y un carácter especial(@$!%*?&)",
  //   });
  // }
  if (!regexBirthday.test(birthd)) {
    return res.status(400).json({
      message: "la fecha de nacimiento no es válida debe ser AAAA-MM-DD",
    });
  }
  // const country = identifyCountry(phone);
  // console.log(`pais identficado${country}`);
  // // if (country === "Desconocido") {
  // //   return res.status(400).json({
  // //     message: "El número de teléfono no es válido para los países soportados",
  // //   });
  // // }

  next();
}
