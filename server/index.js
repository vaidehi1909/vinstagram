import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import connectDB from "./app/config/db.js";
import { registerRoutes } from "./app/config/route.js";
import CONSTANTS from "./constants.js";
import Promise from "bluebird";

global.Promise = Promise;

connectDB();

const app = express();

const corsOptions = {
  origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
  optionsSuccessStatus: 200, // For legacy browser support,
  credentials: true, // for cookie
};

app.use(bodyParser.json());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("This is the homepage");
});

registerRoutes(app).then(() => {
  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res
      .status(err.code || 500)
      .json({ error: err.message || "something went wrong!" });
  });

  app.listen(CONSTANTS.PORT, () => {
    console.log(
      `Success! Your application is running on port ${CONSTANTS.PORT}.`
    );
  });
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});
