import locationRouter from "../routes/location";

export default (app) => {
  app.use("/location", locationRouter);
};
