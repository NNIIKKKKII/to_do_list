import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';
import animeData from './data/anime.json' assert {type : json};

const app = express();
const port = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, 'public')));


app.get("/api/random-anime", (req, res)=>{
    const randomindex = Math.floor(Math.random() * animeData.length);
    res.json(animeData[randomindex]);
})















app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})