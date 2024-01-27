export const PROXY =
  process.env.NODE_ENV === "production"
    ? "https://eyepa-server.onrender.com"
    : "http://localhost:4000";
