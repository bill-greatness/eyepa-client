import axios from "axios";

export const PROXY =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://eyepa-server.onrender.com";

export const getDocs = async ({ path, getter }) => {
  try {
    const { data } = await axios.get(`${PROXY + path}`);
    getter(data);
  } catch (err) {
    // for now, log the error.
    console.log(err);
  }
};