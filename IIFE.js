
// IMMIDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// FUNCTION EXECUTION AS SOON AS ITS DECLARED/DEFINED
(function chai(){
    console.log("This is IIFE")  // UNNAMED IIFE
})();                            // USE ; FOR STOPPING CONTEXT OR ENDING

( (name) => {
    console.log(`IIFE 2 ${name}`)        // IIFE IN TERMS OF ARRAOW FUNCTION
} )("Shahrukh");                         // NAMEF IIFE
