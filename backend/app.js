const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
require("dotenv").config();
const bodyParser = require("body-parser");
const router = express.Router();
var axios = require("axios");

app.use(cors());
app.use(bodyParser.json());
app.use(router);

router.post("/", async (req, res, next) => {
  console.log("POST request received in /");

  const user_identifier = req.body.userId;

  var data = JSON.stringify({
    api_token: process.env.TAP_API_TOKEN,
    user_identifier,
    offer_identifier: process.env.TAP_OFFER_IDENTIFIER,
  });

  var config = {
    method: "post",
    url: process.env.TAP_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10000,
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.status(200).json({ offer: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });
});

app.use((req, res, next) => {
  return next(new Error("Path not found on server"));
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
