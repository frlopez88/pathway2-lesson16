import { Car,  Truck } from './vehicle.js'

let gobalObject 

function hideInputs(){

    let selector = document.querySelector("select")
    let inputPayload = document.getElementById("inputPayload")
    let inputDoors = document.getElementById("inputDoors")
    let title1 = document.getElementById("title1")

    let labelDoors = document.getElementById("labelDoors")
    let labelPayload = document.getElementById("labelPayload")

    if(selector.value ==="car"){
        inputPayload.style.display ="none"
        labelPayload.style.display ="none"

        inputDoors.style.display = "block"
        labelDoors.style.display = "inline"
        title1.textContent = "Create Car"
    }
    if (selector.value === "truck"){
        inputPayload.style.display = "block"
        labelPayload.style.display = "inline"

        inputDoors.style.display ="none"
        labelDoors.style.display ="none"
        title1.textContent = "Create Truck"
    }

}


function createVehicle(){

    event.preventDefault()

    let brand = inputBrand.value
    let model = inputModel.value 
    let year = inputYear.value
    let doors  = inputDoors.value
    let payLoad = inputPayload.value 

    let type = inputType.value 
    let pelement = document.querySelector("p")

    if (type === "car"){
        gobalObject = new Car(brand, model, year, doors)
        pelement.textContent = gobalObject.getDetails()
        driveForm.style = 'block'
    } 

    if (type == "truck"){
        gobalObject = new Truck (brand, model, year, payLoad)
        pelement.textContent = gobalObject.getDetails()
        maintanceForm.style = 'block'

    }

    
}

function addMaintance(){
    event.preventDefault()
    let cost = parseFloat(inputCost.value)
    gobalObject.performMaintance(cost)
    let pelement = document.querySelector("p")
    pelement.textContent = gobalObject.getInfoTruck()

}

function addMilesToCar(){
    event.preventDefault()
    let miles = parseFloat(inputMiles.value) 
    gobalObject.drive(miles)
    let pelement = document.querySelector("p")
    pelement.textContent = gobalObject.getInfoOdometer()
}

window.hideInputs = hideInputs

window.createVehicle = createVehicle

window.addMaintance = addMaintance

window.addMilesToCar = addMilesToCar