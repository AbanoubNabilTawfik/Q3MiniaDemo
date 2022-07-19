class Engine {
    constructor(engineType:any) {

    }
}

class Tiers {
    constructor(numberOfTiers:any) {

    }
}

class Car {
    engine: any;
    tiers: any;
    constructor(engine:any,tiers:any) {
        //this.engine = new Engine();
        //this.tiers = new Tiers();
        this.engine=engine;
        this.tiers=tiers;
    }
}

let engine= new Engine("GAZ");
let tiers= new Tiers(4);
let car = new Car(engine,tiers);


//DRY===>Don't repeate yourself
//Single Responsibilty principle (S)
//Open Closed principle (O)