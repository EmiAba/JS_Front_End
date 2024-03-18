
function solve(){

const vehicle = new Vehicle('Car', 'ModelX', parts, 200);

console.log(`Before driving: ${vehicle.fuel}`);
vehicle.drive(50);
console.log(`After driving: ${vehicle.fuel}`);
console.log(`Parts quality: ${vehicle.parts.quality}`);

class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            get quality() {
                return this.engine * this.power;
            }
        };
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}


}
