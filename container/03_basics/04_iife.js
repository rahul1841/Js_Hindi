// Immediately invoked function expression (iife)

(function chai(){
    // named iifi
    console.log(`DB CONNECTED`);
})();



(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('hitesh')