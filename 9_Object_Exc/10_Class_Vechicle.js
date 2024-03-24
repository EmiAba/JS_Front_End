class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        // Ensure parts includes the 'quality' property, calculated as engine * power
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        };
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}
