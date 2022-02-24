const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const routes = require("./routes/goalRoutes.js");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const colors = require("colors");
const connectDB = require("./config/db.js");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", routes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server Started On Port ${port}`));
