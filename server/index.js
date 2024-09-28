import express from "express";
import Router from "../Routes/ProductRoutes.ts";

const app = express();
const port = 5000;

app.use("/api", Router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
