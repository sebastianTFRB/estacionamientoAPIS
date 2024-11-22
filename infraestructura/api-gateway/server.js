const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Configuración de rutas para los microservicios
app.use('/api/vehicles', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/api/fichas', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/api/users', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

app.listen(PORT, () => {
    console.log(`API Gateway corriendo en el puerto ${PORT}`);
});
