const express = require("express");
require("dotenv").config();

const app = express();

const {PORT} = process.env;

const port = PORT || 3000;

app.get("/posts", (req, res, next)=> {
    console.log(req.query)
    console.log(req.query.author)
    console.log(req.query.dateFrom)
    res.json(req.query)
});

app.get("/posts/:id", (req, res, next)=> {
    console.log(req.params)
    res.json(req.params)
});

app.post("/posts", express.json(), (req, res, next)=> {
    console.log(req.body)
    res.json(req.body)
});

app.put("/posts/:id", express.json(), (req, res, next)=> {
    console.log(req.params)
    console.log(req.body)
});

app.patch("/carts/:id/:goodId", express.json(), (req, res, next)=> {
    console.log(req.params.id)
    console.log(req.params.goodId)
    console.log(req.body)
});


app.listen(port);