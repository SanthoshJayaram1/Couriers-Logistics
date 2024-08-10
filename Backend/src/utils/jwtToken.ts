import jwt from "jsonwebtoken";

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "10m",
  });
};

export const generateRefreshToken = (payload, res) => {
  const token = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "30d",
  });

  res.cookie("rfToken", token, {
    path: "/api/v1/auth/refresh_token",
    secure: true,
    sameSite: "none",
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return token;
};
