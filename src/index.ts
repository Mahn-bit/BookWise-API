import dotenv from "dotenv";
import express from "express";

dotenv.config;

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.listen(port, () => {
  console.log(`[Server]: Server running at http://localhost:${port}`);
});
