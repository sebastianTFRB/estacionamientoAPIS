const prisma = require('../prisma/prisma-client');

const ShowVehicles = async (req, res) => {
    try {
        const vehicles = await prisma.vehiculo.findMany({
            include: {
                ficha: {
                    select: {
                        estadoPago: true,
                        fechaSalida: true,
                    },
                },
            },
        });
        res.json({ message: "Lista de vehículos", vehicles });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los vehículos.", error: error.message });
    }
};

const ShowVehicle = async (req, res) => {
    const { placa } = req.params;
    try {
        const vehicle = await prisma.vehiculo.findUnique({
            where: { placa },
            include: { ficha: true },
        });
        if (!vehicle) {
            return res.status(404).json({ message: "Vehículo no encontrado" });
        }
        res.json(vehicle);
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
};

const AddVehicle = async (req, res) => {
    const { placa, modelo, marca, color, tipo, atributo } = req.body;
    try {
        const newVehicle = await prisma.vehiculo.create({
            data: {
                placa,
                modelo,
                marca,
                color,
                tipo,
                atributo,
                ficha: {
                    create: {
                        estadoPago: false,
                        fechaEntrada: new Date(),
                    },
                },
            },
        });
        res.json({ message: "Vehículo agregado con ficha.", vehicle: newVehicle });
    } catch (error) {
        res.status(500).json({ message: "Error al agregar el vehículo.", error: error.message });
    }
};

const EditVehicle = async (req, res) => {
    const { placa } = req.params;
    const { nuevaPlaca, modelo, marca, color, tipo, atributo } = req.body;
    try {
        const updatedVehicle = await prisma.vehiculo.update({
            where: { placa },
            data: {
                placa: nuevaPlaca,
                modelo,
                marca,
                color,
                tipo,
                atributo,
            },
        });
        res.json({ message: "Vehículo actualizado.", vehicle: updatedVehicle });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el vehículo.", error: error.message });
    }
};

const DeleteVehicle = async (req, res) => {
    const { placa } = req.params;
    try {
        const vehicle = await prisma.vehiculo.findUnique({ where: { placa } });
        if (!vehicle) {
            return res.status(404).json({ message: "Vehículo no encontrado" });
        }

        await prisma.ficha.deleteMany({ where: { vehiculoId: vehicle.id } });
        await prisma.vehiculo.delete({ where: { placa } });

        res.json({ message: `Vehículo con placa ${placa} eliminado.` });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el vehículo.", error: error.message });
    }
};

module.exports = {
    ShowVehicles,
    ShowVehicle,
    AddVehicle,
    EditVehicle,
    DeleteVehicle,
};
