const prisma = require('../prisma/prisma-client');

// Mostrar todas las fichas
const ShowFichas = async (req, res) => {
    try {
        const fichas = await prisma.ficha.findMany({
            include: {
                vehiculo: {
                    select: {
                        placa: true,
                        modelo: true,
                        marca: true,
                    },
                },
            },
        });
        res.json({ message: "Lista de fichas", fichas });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las fichas.", error: error.message });
    }
};

// Mostrar una ficha específica por ID
const ShowFicha = async (req, res) => {
    const { id } = req.params;
    try {
        const ficha = await prisma.ficha.findUnique({
            where: { id: parseInt(id) },
            include: { vehiculo: true },
        });
        if (!ficha) {
            return res.status(404).json({ message: "Ficha no encontrada." });
        }
        res.json(ficha);
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor.", error: error.message });
    }
};

// Actualizar estado de pago y fecha de salida
const UpdateFicha = async (req, res) => {
    const { id } = req.params;
    const { estadoPago } = req.body;

    try {
        const ficha = await prisma.ficha.findUnique({ where: { id: parseInt(id) } });
        if (!ficha) {
            return res.status(404).json({ message: "Ficha no encontrada." });
        }

        const updatedFicha = await prisma.ficha.update({
            where: { id: parseInt(id) },
            data: {
                estadoPago: estadoPago,
                fechaSalida: estadoPago ? new Date() : null,
            },
        });

        res.json({ message: "Ficha actualizada.", ficha: updatedFicha });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la ficha.", error: error.message });
    }
};

module.exports = {
    ShowFichas,
    ShowFicha,
    UpdateFicha,
};
