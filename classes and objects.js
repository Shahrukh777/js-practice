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

// CLASSES


