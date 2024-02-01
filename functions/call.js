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

export const getDoc = async ({ path }) => {
  return axios.get(`${PROXY + path}`, {
    headers: {
      userid: localStorage.getItem("userID"),
    },
  });
};

export const getWithHeaders = async ({ path, getter }) => {
  const { data } = await axios.get(`${PROXY + path}`, {
    headers: {
      userid: localStorage.getItem("userID"),
    },
  });

  getter(data);
};

export const sendDoc = async ({ path, data, feedback }) => {
  try {
    const { status } = await axios.post(`${PROXY + path}`, data, {
      headers: { userid: localStorage.getItem("userID") },
    });
    feedback(status);
  } catch (err) {
    console.log(err);
  }
};

export const updateDoc = async ({ path, data }) => {
  return await axios.patch(`${PROXY + path}`, data, {
    headers: { userid: localStorage.getItem("userID") },
  });
};
