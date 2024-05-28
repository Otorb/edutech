export const regexPeru = /^\+51[\s-]?\d{9}$/;
export const regexArgentina = /^\+54[\s-]?\d{10}$/;
export const regexChile = /^\+56[\s-]?\d{9}$/;
export const regexEcuador = /^\+593[\s-]?\d{9}$/;
export const regexUruguay = /^\+598[\s-]?\d{8}$/;
export const regexParaguay = /^\+595[\s-]?\d{9}$/;
export const regexBrasil = /^\+55[\s-]?\d{10,11}$/;
export const regexColombia = /^\+57[\s-]?\d{10}$/;
export const regexVenezuela = /^\+58[\s-]?\d{10}$/;
export const regexMexico = /^\+52[\s-]?\d{10}$/;
export const regexPanama = /^\+507[\s-]?\d{8}$/;
export const regexEEUU = /^\+1[\s-]?\d{10}$/;

export function identifyCountry(phoneNumber) {
  if (regexPeru.test(phoneNumber)) return "Peru";
  if (regexArgentina.test(phoneNumber)) return "Argentina";
  if (regexChile.test(phoneNumber)) return "Chile";
  if (regexEcuador.test(phoneNumber)) return "Ecuador";
  if (regexUruguay.test(phoneNumber)) return "Uruguay";
  if (regexParaguay.test(phoneNumber)) return "Paraguay";
  if (regexBrasil.test(phoneNumber)) return "Brasil";
  if (regexColombia.test(phoneNumber)) return "Colombia";
  if (regexVenezuela.test(phoneNumber)) return "Venezuela";
  if (regexMexico.test(phoneNumber)) return "Mexico";
  if (regexPanama.test(phoneNumber)) return "Panama";
  if (regexEEUU.test(phoneNumber)) return "EEUU";
  return "Desconocido";
}
