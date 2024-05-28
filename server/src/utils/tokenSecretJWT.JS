//? CON ETE COMANDO LO CREO DIRECTAMENTE EN LA CONSOLA JWT_SECRET
//node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

import cripto from "crypto";

export const tokenSecretJWT = cripto.randomBytes(64).toString("hex");
console.log(tokenSecretJWT);
