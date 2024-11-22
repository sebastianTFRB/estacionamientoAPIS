const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users.routes');

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Microservicio de usuarios corriendo en el puerto ${PORT}`);
});
