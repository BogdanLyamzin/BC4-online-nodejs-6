const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const postsApi = require("./api");

const {PORT, DB_HOST} = process.env;
const port = PORT || 3000;

const app = express();

app.use(cors());

app.use("/posts", postsApi);

app.use((req, res)=>{
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Page not found"  
    })
});

app.use((error, _, res, __)=>{
    const code = error.code || 500;
    res.status(500).json({
        status: "fail",
        code,
        message: error.message
    })
});

const dbConnect = mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

dbConnect
    .then(()=> {
        console.log("DB connect");
        app.listen(port, ()=> console.log("Server running"))
    })
    .catch((error)=> console.log(error))