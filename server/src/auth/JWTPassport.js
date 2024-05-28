import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import passport from "passport";
import { Students, Admin, Teachers, Parents } from "../models/index.js";
import { JWT_TOKEN_SECRET } from "../config/envs.js";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_TOKEN_SECRET,
};

const findUserByIdAndRole = async (userId, role) => {
  if (role === "student") {
    return await Students.findByPk(userId);
  } else if (role === "admin") {
    return await Admin.findByPk(userId);
  } else if (role === "teacher") {
    return await Teachers.findByPk(userId);
  } else if (role === "parent") {
    return await Parents.findByPk(userId);
  }
  return null;
};

// Estrategia JWT
const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await findUserByIdAndRole(payload.userId, payload.role);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
});

passport.use(jwtStrategy);

// Middleware para verificar el token
export const verifyToken = passport.authenticate("jwt", { session: false });

export default passport;
