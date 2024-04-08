import express from "express";
import cors from "cors";
import logger from "morgan";
import routes from "./init/routes.init";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

routes(app);

const port = 8080;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
