const prisma = require('../prisma/prisma-client');

// Mostrar todos los usuarios
const ShowUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json({ message: "Lista de usuarios", users });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los usuarios.", error: error.message });
    }
};

// Mostrar un usuario específico por ID
const ShowUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado." });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor.", error: error.message });
    }
};

// Crear un nuevo usuario
const AddUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = await prisma.user.create({
            data: { name, email, password },
        });
        res.json({ message: "Usuario creado.", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el usuario.", error: error.message });
    }
};

// Actualizar un usuario por ID
const EditUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: { name, email, password },
        });
        res.json({ message: "Usuario actualizado.", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el usuario.", error: error.message });
    }
};

// Eliminar un usuario por ID
const DeleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.user.delete({ where: { id: parseInt(id) } });
        res.json({ message: `Usuario con ID ${id} eliminado.` });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el usuario.", error: error.message });
    }
};

module.exports = {
    ShowUsers,
    ShowUser,
    AddUser,
    EditUser,
    DeleteUser,
};
