const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const routes = require("./routes/goalRoutes.js");

const app = express();

app.use("/api/goals", routes);

app.listen(port, () => console.log(`Server Started On Port ${port}`));
