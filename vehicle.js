export class Vehicle {

    constructor(brand, model, year){
        this.brand = brand 
        this.model = model 
        this.year = year
    }

    getDetails(){
        return `The vehicle brand ${this.brand} and model ${this.model} `
    }

}


export class Car extends Vehicle {

    constructor (brand, model, year, doors){
        super(brand, model, year)
        this.doors = doors 
        this.odometer= 0
    }
    
    drive(miles){
        this.odometer = this.odometer + miles
    }

    getInfoOdometer(){
        return `The car has been driven ${this.odometer}`
    }

}


export class Truck extends Vehicle {

    constructor(brand, model, year, payLoadCapacity){

        super(brand, model, year)
        this.payLoadCapacity = payLoadCapacity
        this.maintanceCost = 0

    }

    performMaintance(cost){
        
        this.maintanceCost = this.maintanceCost + cost

    }

    getInfoTruck(){
        return `The truck has cost $${this.maintanceCost}`
    }

}