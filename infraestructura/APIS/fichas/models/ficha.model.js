class Ficha {
    constructor(id, fechaEntrada, fechaSalida = null, estadoPago = false, vehiculoId) {
        this.id = id;
        this.fechaEntrada = fechaEntrada;
        this.fechaSalida = fechaSalida;
        this.estadoPago = estadoPago;
        this.vehiculoId = vehiculoId;
    }

    registrarSalida() {
        this.fechaSalida = new Date();
        this.estadoPago = true;
    }

    estaPagado() {
        return this.estadoPago;
    }
}

module.exports = Ficha;
