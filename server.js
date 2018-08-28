"use strict";
const express = require("express");
const app = express();
const shoes = require("./routes/shoes");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/shop", shoes);

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});