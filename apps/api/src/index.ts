require("dotenv").config();

import cors from "cors";
import express from "express";

import { trpcExpress } from "@cook/trpc-server";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello !");
});

app.use("/trpc", trpcExpress);

app.listen(3001, () => console.log(`Listening on port 3001`));
