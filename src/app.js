const express = require("express");
const cors = require("cors");
const { db } = require('./mysql.js');
const dotenv = require('dotenv');

const destinoRoutes = require('./routes/destino.routes.js');
const clienteRoutes = require('./routes/cliente.routes.js');
const usuarioRoutes = require('./routes/usuarios.routes.js');
const tipoPaquetesRoutes = require('./routes/tipo_paquetes.routes.js');
const repartoRoutes = require('./routes/repartos.routes.js');
const comprobantesRoutes = require('./routes/comprobantes.routes.js');
const consultasRoutes = require('./routes/consultas.routes.js');

dotenv.config()

const app = express();

const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


app.use('/api', destinoRoutes);
app.use('/api', clienteRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', tipoPaquetesRoutes);
app.use('/api', repartoRoutes);
app.use('/api', comprobantesRoutes);
app.use('/api', consultasRoutes);

async function startServer() {
    try {
        await db.connect();
        console.log('Conexión a la base de datos exitosa');
        app.listen(port, () => {
            console.log(`Servidor Express escuchando en el puerto ${port}`);
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

startServer();