import axios from "axios";
export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { data } = axios.get("/path", {});
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}
