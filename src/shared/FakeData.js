import {faker} from "@faker-js/faker"

function createCarList(){
    return {
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7FVnkARdJ4C82Rmc-AO8E-upSAN8YwOQNg&s",
        miles:1000,
        gearType : 'Automatic',
        price:faker.finance.amount({min:4000,max:20000})
    }
}

const carList  = faker.helpers.multiple(createCarList,{
    count:7,
})

export default {
    carList
}