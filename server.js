const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(cors());
app.use(express.json());


app.use(express.static('./src/public'));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


const PORT = process.env.PORT || 3014;
app.listen(PORT, () => {
  console.log(`Server is up and listening to PORT: ${PORT}`);
});
