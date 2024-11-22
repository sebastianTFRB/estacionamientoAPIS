class Vehiculo {
    constructor(placa, modelo, marca, color, tipo, atributo) {
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.tipo = tipo;
        this.atributo = atributo;
    }
}

class Carro extends Vehiculo {
    constructor(placa, modelo, marca, color, tipo, atributo, numPuertas) {
        super(placa, modelo, marca, color, tipo, atributo);
        this.numPuertas = numPuertas;
    }
}

class Moto extends Vehiculo {
    constructor(placa, modelo, marca, color, tipo, atributo, cilindraje) {
        super(placa, modelo, marca, color, tipo, atributo);
        this.cilindraje = cilindraje;
    }
}

module.exports = { Vehiculo, Carro, Moto };
