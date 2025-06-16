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
let s1 = "Hello JavaScript!";
let s2 = 'Hello JavaScript';

function Student(name, age, rollno){
    this.name = name;
    this.age = age;
    this.rollno = rollno;
}

let student1 = new Student("Jhon", 20, 2525);
console.log("Student name is: " + student1.name + " Age is: " + student1.age + " Roll No is: " + student1.rollno);


//Array

let ageArray = [25,23,18,15,10,45,55,65,75,85,95];
console.log("Age Array is: " + ageArray[1]);

let carArray = ["Tata", "BMW", "Audi", "Mercedes", 25.5, true];
console.log("Car Array is: " + carArray[0]);

let mixArray = [1, "Tata", true, 25.5];
console.log("Mix Array is: " + mixArray[3]);

//push opreations on array
mixArray.push("Hello Array");
console.log("Mix Array is: " + mixArray);

//pop operation on array
mixArray.pop();
console.log("Mix Array is: " + mixArray);

//shift operation on array
mixArray.shift();
console.log("Mix Array is: " + mixArray);

//unshift operation on array
mixArray.unshift("Hello Array");
console.log("Mix Array is: " + mixArray);


function printLength(item){
    console.log("Array of item is: " + item +" and Length is: " + item.length);
}

carArray.forEach(printLength);

// PROBLEM:
// Given  ageArray = [25,23,18,15,10,45,55,65,75,85,95];
// use filter() array method to print only ages above 25.

console.log("Age Array is: " + ageArray);
function filterAge(item){
    if(item>25){
        console.log("Age is: " + item);
    }
}
ageArray.forEach(filterAge);

//Another way to filter the array
let filterAgeArray = ageArray.filter(item => item > 25);
console.log("Filter Age Array is: " + filterAgeArray);


/*Today we will learn flow control ex. ef...else, switch case etc.*/

let ageOfSuresh = 45;

if (ageOfSuresh>=50) {
    console.log("Suresh is over 50 Years");
}
else{
    console.log("Suresh is below 50 Years");
}

//Switch Demo

let day = 2;

switch(day){
    case 1 : console.log("It's Monday"); break;
    case 2 : console.log("It's Tuesday"); break;
    case 3 : console.log("It's Wednesday"); break;
    case 4 : console.log("It's Thursday"); break;
    case 5 : console.log("It's Friday"); break;
    case 6 : console.log("It's Saturday"); break;
    case 7 : console.log("It's Sunday"); break;
    default: console.log("Invalid Day"); break;    

}

//For loop
for(i=0; i<5; i++){
    //Do something here
    console.log("i = " + i);
}

console.log(" ");
console.log("For loop with break");
//For loop with break
for(i=0; i<5; i++){
    //Do something here
    if(i==3)
        break;

    console.log("i = " + i);
}

console.log(" ");
console.log("For loop with continue");
//For loop with break
for(i=0; i<5; i++){
    //Do something here
    if(i<2)
     continue;

    console.log("i = " + i);
}


console.log(" ");
console.log("for-of loop specially for an array");

for(let age of ageArray){
    console.log("Age: " + age)
}


console.log(" ");
console.log("for-of loop specially for an array with filter");
const filteredAges = ageArray.filter(item => item < 50);
for(let age of filteredAges){
    console.log("Age: " + age)
}


console.log(" ");
console.log("Challenge: Create Function having name and age , then Create 5 person object and then  for-of loop, to displaty only those person whose age is less then 50");
function personNameAge(name, age){
    this.name = name;
    this.age = age;
}

let person1 = new personNameAge("Tony Stark",25);
let person2 = new personNameAge("Thor",55);
let person3 = new personNameAge("Hulk",30);
let person4 = new personNameAge("Captain America",60);
let person5 = new personNameAge("Black Panther",22);

// Create an array of person objects
const people = [person1, person2, person3, person4, person5];

const filteredPerson = people.filter(item => item.age<50);

for(let personDetails of filteredPerson){
    console.log("Person Name is: " + personDetails.name + " And Age is: " + personDetails.age);
}



// Function to display person details
let userOne = {
    name: "John Doe",
    age: 30,
}

for (let userDetails in userOne){
    console.log("User Property is: " + userDetails + " And Value is:" + userOne[userDetails]);
}



// Spread Rest Operator

console.log(" ");
console.log("Spread Rest Operator");
let numberArray = [10,20,50,45,33];

function f1(a,b,c,x,y){
    return a+b+c+x+y;  
}

console.log(f1(numberArray[0], numberArray[1], numberArray[2], numberArray[3], numberArray[4]));

console.log(f1(...numberArray));
