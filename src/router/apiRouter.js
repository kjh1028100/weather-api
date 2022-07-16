import express from "express";
import { postWeather } from "../controllers/rootController";

const apiRouter = express.Router();

apiRouter.post("/weather/info", postWeather);

export default apiRouter;
