const { Router } = require('express');
const {
    ShowVehicles,
    ShowVehicle,
    AddVehicle,
    EditVehicle,
    DeleteVehicle,
} = require('../controllers/vehicles.controller');

const router = Router();

router.get('/', ShowVehicles);
router.post('/', AddVehicle);
router.get('/:placa', ShowVehicle);
router.put('/:placa', EditVehicle);
router.delete('/:placa', DeleteVehicle);

module.exports = router;
