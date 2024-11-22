const express = require('express');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicles.routes');

const app = express();
const PORT = 3001;

// Middleware para CORS y parseo JSON
app.use(cors());
app.use(express.json());

// Ruta raíz de prueba
app.get('/', (req, res) => {
    res.send('Microservicio de vehículos funcionando correctamente');
});

// Rutas específicas del microservicio
app.use('/api/vehicles', vehicleRoutes);

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Microservicio de vehículos corriendo en el puerto ${PORT}`);
});
