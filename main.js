// Desfination of Car Object
function Car(name, model, year){
    this.name= name;
    this.model = model;
    this.year = year;

    //Method to display car details
    this.displayDetails = function(){
        console.log("Car Name is: " + this.name + " Model is: " + this.model + " Year is: " + this.year);
    }

};

//Another way to create an object
let car = {
    name:"Tata",
    model:"Nexon",
    year:2025,
    displayDetails: function(){
        console.log("Car Name is: " + this.name + " Model is: " + this.model + " Year is: " + this.year);
    }
};


//Another way to create an object
let car3 = {
    name:"Tata",
    model:"Nexon",
    year:2022,
}



console.log("Car name: " + car3.name + " Model is: " + car3.model +  " Year is" + car3.year);

let car1 = new Car("BMW", "X5", 2020);
let car2 = new Car("Audi", "A8", 2021);

car2.displayDetails();

console.log("Car name: " + car1.name + " Model is: " + car1.model +  " Year is" + car1.year);
console.log("Car name: " + car2.name + " Model is: " + car2.model +  " Year is" + car2.year);


//Problem statement: Create a Bus object with properties name, price, year and a method to display the bus details sum of two prices.
function Bus(name, price, year){
    this.name= name;
    this.price = price;
    this.year = year;
};
let bus1 = new Bus("Volvo", 8000, 2024);

let bus2 = new Bus("GSRTC", 5000, 2025);

console.log("Bus name: " + bus1.name + " price is: " + bus1.price +  " Year is" + bus1.year);
console.log("Total Price of Bus is: " + (bus1.price + bus2.price));

const Hello = "Hello World! Javascript!";

let Hello1 = "How Are you..?";

//alert(Hello);


let x;
let X = "Hello";

//alert('x is ' + x + ' and X is ' + X);



document.getElementById('title').innerText = "Hello JavaScript How Are You...?"

//Number Data
let n1 = 10;
let n2 = 20;

//Some opretors
let n3 = n1 + n2;
//alert('n3 is ' + n3);

//Boolean Data
let b1 = true;
let b2 = false;


//string(text) can be put in double qoute or in single quote
let s1 = "Hello World!";
let s2 = 'Hello JavaScript';

function Student(name, age, rollno){
    this.name = name;
    this.age = age;
    this.rollno = rollno;
}

let student1 = new Student("Jhon", 20, 2525);
console.log("Student name is: " + student1.name + " Age is: " + student1.age + " Roll No is: " + student1.rollno);
