import { regexEmail, regexPassword } from "../helpers/regexForm.js";
import { identifyCountry } from "../helpers/regexCountryPhone.js";

export const validateTeachers = (req, res, next) => {
  const { name, lastName, email, password, phone } = req.body;
  if (!name || !lastName || !email || !password || !phone) {
    return res.status(400).json({
      error: "Name, lastName, email, password and phone are required",
    });
  }

  if (!regexEmail.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }
  if (!regexPassword.test(password)) {
    return res.status(400).json({
      error:
        "la contraseña debe tener al menos una letra minúscula, una mayúscula, un dígito y un carácter especial(@$!%*?&)",
    });
  }

  const country = identifyCountry(phone);
  if (country === "Desconocido") {
    return res.status(400).json({
      error: "El número de teléfono no es válido para los países soportados",
    });
  }

  next();
};
