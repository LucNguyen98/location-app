import express from "express";
import {
  autoCheckIn,
  loggerLocation,
} from "../controllers/location.controller";

const locationRouter = express.Router();
locationRouter.post("/autoCheckIn", autoCheckIn);
locationRouter.post("/logger", loggerLocation);

export default locationRouter;
