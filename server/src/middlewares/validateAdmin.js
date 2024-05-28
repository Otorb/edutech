import { regexEmail, regexPassword } from "../helpers/regexForm.js";

export const validateAdmin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  if (!regexEmail.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }
  if (!regexPassword.test(password)) {
    return res.status(400).json({
      error:
        "la contraseña debe tener al menos una letra minúscula, mayúscula, un dígito y un carácter especial(@$!%*?&)",
    });
  }
  next();
};
