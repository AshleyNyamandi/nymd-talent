import express from "express";
import path from "path";
import { NODE_ENV, PORT } from "./lib/env.js";


const app = express();

const __dirname = path.resolve();


if (NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, ".../client/dist")));

    app.get("/{*any}", (re, res) => {
        res.sendFile(path.join(__dirname, "../client", "dist", "index.html"))
    })
}


app.get("/", (req, res) => {
    res.send("Hello from the server one again")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})