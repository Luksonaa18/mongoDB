import jwt from "jsonwebtoken";
export const generateToken = (payload: object) =>
  jwt.sign(payload, process.env.JWT_SECRET || "", {
    expiresIn: "1h",
  });

export const verifyToken = (token: string) =>
  Boolean(jwt.verify(token, process.env.JWT_SECRET || ""));
