const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 3000;

app.use(bodyParser.json());

let obavjest = [];

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/vratiObavjesti", (req, res) => {
    var data;   
    var temp = [];

    for (i in obavjesti) {
        data = obavjest[i].naziv + " " + obavjest[i].datum;
        temp.push(data);
    }
    res.send(temp);
});

app.post("/dodajObavjest", (req, res) => {
    var data = req.body;
    console.log(data);
    data = { ...data, id: uuidv4(), datum: Date() };
    obavjest.push(data);
    res.send(obavjest);
});

app.get("/vratiObavjest", (req, res) => {
    var data;
    var temp = [];

    for (i in obavjest) {
        data =
        obavjest[i].naziv + " " + obavjest[i].sadrzaj + " " + obavjest[i].datum;
        temp.push(data);
    }
    res.send(temp);
});

app.patch("/izmjeniObavjest/:id", (req, res) => {
    var { id } = req.params;
    console.log(id);
    var { sadrzaj } = req.body;
    var obavj = obavjest.find((x) => x.id == id);
    obavj.sadrzaj = sadrzaj;
    console.log(obavj);
    res.send(obavjesti);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});