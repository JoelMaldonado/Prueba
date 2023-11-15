const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config()

const port = process.env.PORT || 3000;
const ip = process.env.IP || '0.0.0.0';

app.get("/pokemon", (req, res) => {
    const list = [
        { name: 'Pikachu', tupo: "Electricidad" },
        { name: 'Bulbasour', tupo: "Planta" },
        { name: 'Charmander', tupo: "Fuego" },
        { name: 'Snorlax', tupo: "Lucha" },
        { name: 'Geodude', tupo: "Lucha" },
    ]
    res.json(list)
})

app.listen(port, ip, () => {
    console.log(`El servidor está escuchando en http://${ip}:${port}`);
});