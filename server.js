import express from "express";
import minimist from "minimist"

const app = express();
const args = minimist(process.argv.slice(2));

let port = 5000;

if ("port" in args) {
	port = args.port;
}

app.get('/app/', (req, res) => {
	res.sendStatus(200);
});

app.get('/app/roll/', (req, res) => {
    res.send('Hello World, from express');
});

app.get('/app/roll/:sides/', (req, res) => {
    res.send('Hello World, from express');
});

app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.send('Hello World, from express');
});

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.send('Hello World, from express');
});
