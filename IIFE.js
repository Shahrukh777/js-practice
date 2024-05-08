
// IMMIDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai(){
    console.log("This is IIFE")  // UNNAMED IIFE
})();                            // USE ; FOR STOPPING CONTEXT OR ENDING

( (name) => {
    console.log(`IIFE 2 ${name}`)        // IIFE IN TERMS OF ARRAOW FUNCTION
} )("Shahrukh");                         // NAMEF IIFE
