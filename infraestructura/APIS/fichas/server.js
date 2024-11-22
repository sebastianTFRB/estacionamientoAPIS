const express = require('express');
const cors = require('cors');
const fichaRoutes = require('./routes/ficha.routes');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Microservicio de fichasfuncionando correctamente');
});

app.use('/api/fichas', fichaRoutes);

app.listen(PORT, () => {
    console.log(`Microservicio de fichas corriendo en el puerto ${PORT}`);
});
