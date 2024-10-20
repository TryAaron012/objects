const car = {
    type: "BMW",
    model: "CSI-635",
    color: "Black"
};

console.log("Type of car:", typeof car);

car.type = "BMW";
console.log("Updated car object:", car);

car.wheels = 4;
console.log("Car object after adding wheels:", car);