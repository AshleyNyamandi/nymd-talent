import express from "express";
import { PORT } from "./lib/env.js";


const app = express()

app.get("/", (req, res) => {
    res.send("Hello from the server one again")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})