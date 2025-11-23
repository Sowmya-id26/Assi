function displayCar(){
    console.log("my car")
}
function displayTruck(){
    console.log("my Truck")
}
function displayBike(){
    console.log("my bike")
}
function VechicalInfo(vehicleCategory, callbackFn){
    console.log("vehicleCategory",vehicleCategory);
        callbackFn()
    
}
VechicalInfo("car",displayCar)
VechicalInfo("Truck",displayTruck)
VechicalInfo("bike",displayBike)