import express from "express";
import morgan from "morgan";
import rootRouter from "./router/roootRouter";
import apiRouter from "./router/apiRouter";

const app = express();

const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/asset", express.static("asset"));
app.use("/", rootRouter);
app.use("/api", apiRouter);

export default app;
