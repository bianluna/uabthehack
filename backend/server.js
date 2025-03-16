require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configuración de la base de datos en Azure
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: true // Asegura una conexión segura con Azure
    }
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
    } else {
        console.log('Conectado a MySQL en Azure');
    }
});

// Ruta para obtener citas médicas - Ejemplo
app.get('/citas', (req, res) => {
    db.query('SELECT * FROM citas', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001; // Puerto en el que Node.js escuchará las solicitudes HTTP del frontend
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
