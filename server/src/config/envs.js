import dotenv from "dotenv";
dotenv.config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  PORT,
  CLAVE_API_SENDGRID,
  ACOUNT_GMAIL_SENDGRID,
  JWT_TOKEN_SECRET,
} = process.env;

export {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  PORT,
  CLAVE_API_SENDGRID,
  ACOUNT_GMAIL_SENDGRID,
  JWT_TOKEN_SECRET,
};
