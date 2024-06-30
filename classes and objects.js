

// class.html req
// Objects

const student =  {
    name: "Shahrukh",
    marks: 69.420,
    printMarks: function(){
        console.log("Marks: " + this.marks)
    }
}

const emp = {
    calcTax1() {
        console.log("Tax rate is 10%.")
    },
    calcTax: function() {
        console.log("Tax rate is 12%.")
    }
}

const shah = {
    salary: 50000,
    calcTax(){
        console.log("Tax rate is 20%.")  // Priority will be given to objects' method when method name are same.
    }
}
const rukh = {
    salary: 40000
}

// USING FUNCTIONS FROM AN OBJECT IN OTHER USING PROTOTYPE

shah.__proto__ = emp; // prototype *** can use functions of emp in shah
rukh.__proto__ = emp;
// check in console ....(shah and rukh)

// -----------------

// CLASSES  (USED WHEN - SIMILAR OBJECTS IN BULK)

// has state and behaviour

class car{
    start(){
        console.log("Start")
    }

    stop(){
        console.log("Stop")
    }

    setBrand(brand){
        this.brandName = brand
    }
}

// creating an object from through class

let audi = new car(); //can access the methods from class
audi.setBrand("audi")

let lexus = new car();
lexus.setBrand("lexus")

// Constructor (automatically invoked by new) *** It is called as soon as an object is created using respective class

class con{
    constructor(name){
        console.log("Construstor is created")
        this.name = name;
    }
}
let obj = new con("Shahrukh");   // will call the constructor
console.log(obj)

// INHERETANCE

class parent{
    parentMethod(){
        console.log("This is a parent method.")
    }
}

class child extends parent{
    childMethod(){
        console.log("This is a child method.")
    }
}

let cobj = new child();  // will have access to parent class methods


// super keyword

class Person{
    constructor(){
        console.log("Parent constructor")
        this.eng = "person UwU"
    }
    eat(){
        console.log("Eating...")
    }
    work(){
        console.log("Do nothing...")
    }
}
class Eng extends Person{
    constructor(){
        super();                // INVOKE PARENT CLASS CONSTRUCTOR
        console.log("Child constructor")
        this.eng = "Engineer"
        console.log("Exit child constructor")
    }
    work(){
        console.log("Working...")      // Overriding
    }
}   

let p1 = new Person();
let e1 = new Eng();