// initial express app
const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: ".env.dev" });
const cors = require("cors");
const corsOptions = {
  origin: "*",
};

const courseRouter = require("./app/routers/course.router");

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Hello course!",
  });
});

courseRouter(app);

const port = process.env.APP_PORT || 8888;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
