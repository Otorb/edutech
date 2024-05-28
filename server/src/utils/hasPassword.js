import bcrypt from "bcrypt";

export async function hahedPassword(password) {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  return passwordHash;
}



export const compare = async (password, hashPassword  )   => { 
  const result = await bcrypt.compare(password, hashPassword);
  return result;
}