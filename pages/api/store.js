import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { data } = await axios.get()
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}
