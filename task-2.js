var express = require("express");
var app = express();
var fs = require("fs");
var { LocalStorage } = require('node-localstorage');

app.use(express.json());

var localstorage = new LocalStorage("./file");

app.post("/", (req, res) => {
    let store1 = JSON.parse(localstorage.getItem("value"))  

    store1.push(req.body);
    localstorage.setItem("value", JSON.stringify(store1, null, 2));

    const storedata1 = localstorage.getItem("value");
    res.send(storedata1) 
    }
);

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});
