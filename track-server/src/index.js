require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri =
  "mongodb+srv://Admin:Aadityadas2010@cluster0-oow9e.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance");
});

mongoose.connection.on("error", err => {
  console.error("error connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`your emailid: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("listning to port 3000");
});
