const { Router } = require('express');
const { ShowFichas, ShowFicha, UpdateFicha } = require('../controllers/ficha.controller');

const router = Router();

router.get('/', ShowFichas); // Obtener todas las fichas
router.get('/:id', ShowFicha); // Obtener una ficha específica
router.put('/:id', UpdateFicha); // Actualizar el estado de pago y fecha de salida

module.exports = router;
