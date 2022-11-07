const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 3000;

app.use(bodyParser.json());

let autor = [];

app.post("/dodajAutora", (req, res) => {
    var data = req.body;
    console.log(data.naziv);
        if (!data.naziv || !data.djela) {
        res.json({
        Error: "Krivi kljucevi",
        });
        } 
        
    else {
        for (i in data.djela) {
        if (data.djela[i].length > 20) {
            res.json({
            Error: "Djelo " + data.djela[i] + " ima vise od 20 znakova",
        });
        }
    }

    data = { ...data, id: uuidv4(), datum: Date() };
    autor.push(data);
    res.send(autor);

    }
});

app.get("/vratiAutore", (req, res) => {
    res.send(autor);
});

app.delete("/izbrisiDjeloAutora/:id/:djelo", (req, res) => {
    var { id } = req.params;    
    var { djelo } = req.params;

    for (a in autor) {
        if (autori[a].id == id) {
        autori[a].djela = autor[a].djela.filter((x) => x != djelo);
        }
    }

    console.log(autor);

    res.send(autor);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
