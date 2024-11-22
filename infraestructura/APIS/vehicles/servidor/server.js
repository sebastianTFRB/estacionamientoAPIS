const express = require('express');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicles.routes');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/api/vehicles', vehicleRoutes);

app.listen(PORT, () => {
    console.log(`Microservicio de vehículos corriendo en el puerto ${PORT}`);
});
