const { Router } = require('express');
const {
    ShowUsers,
    ShowUser,
    AddUser,
    EditUser,
    DeleteUser,
} = require('../controllers/users.controller');

const router = Router();

router.get('/', ShowUsers);       // Obtener todos los usuarios
router.get('/:id', ShowUser);     // Obtener un usuario por ID
router.post('/', AddUser);        // Crear un nuevo usuario
router.put('/:id', EditUser);     // Actualizar un usuario por ID
router.delete('/:id', DeleteUser); // Eliminar un usuario por ID

module.exports = router;
