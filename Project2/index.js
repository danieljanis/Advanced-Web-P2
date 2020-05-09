/* Creates a server with express */
const http = require("http");
const express = require("express");

const app = express()

app.use((req, res) => {
    const method = req.method
    const route = req.url;

    console.log("Method: " + method)
    console.log("Route Path: " + route)

    const returnGuud = {
        method, route, message: "You tried [ " + method + " ] to [ " + route + " ]."
    }

    const returnBaad = {
        method, route, message: "You tried [ " + method + " ] to [ " + route + " ]. How could you?"
    }

    if (route === "/" && method === "GET")
        res.send(returnGuud)
    else if (route === "/whatever" && method === "GET") {
        res.send(returnBaad)
    }
})

const port = 3000;
app.listen(port)
console.log("Now listening to port-radio, coming at you live from port " + port)