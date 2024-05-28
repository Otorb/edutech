export const regexName = /^[a-zA-Z]{1,20}$/;

export const regexLastName = /^[a-zA-Z]{1,20}$/;

// Valida correos electrónicos con formato estándar.
export const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Valida contraseñas con al menos una letra minúscula, una mayúscula, un dígito y un carácter especial(@$!%*?&)
// La longitud mínima es de 8 caracteres.
export const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
