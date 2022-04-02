/* Переменные
const lastName = "WARUDO"
let age = 25
const isTrue = true
const firstName = 'VASYAN'
*/


/*
console.log(typeof firstName)
console.log(typeof age)
console.log(typeof isTrue)
alert("name is: " + firstName + ", lastName is: " + lastName + ", age is: " + age)
console.log(++age)
*/


/* Функции
console.log(calculateAge(1995))

function calculateAge(year) {
    return 2022 - year;
}*/



/*
console.log(isTrue)
const info1 = prompt("Введите инфо")
console.log(info1)
*/

/*  Лог операторы
const courseStatus = "pending" // ready, fail, pending

if (courseStatus === "ready") {
    console.log("Course is pending")
} else if (courseStatus === "pending") {
    console.log("Course is pending")
} else {
    console.log("Course is fail")
}*/

/* Лог операторы
console.log(5 == "5") // true
console.log(5 === "5") //false
*/

/* Массивы
const cars = ["name1", "name2", "name3"]

for (let car of cars) {
    console.log(car)
}

console.log(trueCar(cars))

function trueCar(cars) {
    let counter = 0
    for (let i = 0; i < cars.length; i++) {
        if (cars[i] === "name1" || cars[i] === "name3") {
            console.log("at index " + i + ", we have name: " + cars[i])
        }
    }
    return counter
}
*/

/*
 Объекты
*/

const person = {
    firstName: "Vlad",
    lastName: "Mor",
    age: 26,
    languages: ["en","ru","kr"],
    hasWife: false,

    greet: function (){
        console.log("Hello, my name is " + person.firstName + ", nice to meet you!")
    }
}

console.log(person)
console.log(person.age)
person.greet()

const key = "languages"
console.log(person[key]) // Получаем массив
person.isLeave = true //Добавляем новые поля в обьект извне


