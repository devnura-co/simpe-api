require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

const controller = require("./controller/auth/auth.controller");

//route v1
app.use("/api/v1/", router);

// ============================== ROUTES API ==============================
router.post("/login", controller.loginUser);

app.get("/", (req, res) => {
  res.json({
    message: `Welcome to ${process.env.APP_NAME.toUpperCase()}.`,
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `Server is running on environment: ${process.env.NODE_ENV.toUpperCase()}`
  );
});
