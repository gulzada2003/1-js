class Transport {
    constructor(name, color, engine) {
        this.name = name;
        this.color = color;
        this.engine = engine;
    }
    startEngine() {
        console.log("Engine is disable")
    }
}

class Car extends Transport {
    constructor(name, color, engine, motor, lenght) {
        super(name, color, engine);
        this.motor = motor;
        this.lenght = lenght;
    }
    startEngine (){
        console.log ("Engine is start")
    }
}

const RollsRoyce = new Car ("RollsRoyce", "black", "ТРДД", "BMW AG", 5) 
console.log(RollsRoyce) 