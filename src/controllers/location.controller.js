import { db } from "../init/db.init";

export const autoCheckIn = async (req, res) => {
  try {
    const body = req.body;
    const locationRef = db.collection("location").doc();
    const results = await locationRef.set(body);
    res.status(200).json({
      status: 200,
      messages: "auto check-in success",
      data: null,
    });
  } catch (error) {
    res.status(200).json({
      status: 500,
      messages: "something went wrong",
      data: null,
    });
  }
};

export const loggerLocation = async (req, res) => {
  try {
    const body = req.body;
    const locationRef = db.collection("logger").doc();
    await locationRef.set(body);
    res.status(200).json({
      status: 200,
      messages: "success",
      data: null,
    });
  } catch (error) {
    res.status(200).json({
      status: 500,
      messages: "something went wrong",
      data: null,
    });
  }
};
