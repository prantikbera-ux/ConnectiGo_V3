const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
require("./db/conn");
const user = require("./models/schema");
const cors = require("cors");
const app = express();
const router = require("./routes/routes")

const port =  8000;
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port,()=>{
    console.log("server is started");
})