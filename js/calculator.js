
/*initial console.log header for checking whether console.log prints or not*/
console.log('creating calculator');


//creating calculator object via arrow expressive function as key value pairs.
const calculatorObject = {
    sum : (a,b)=>{
        return a+b;
    },
    mulitplication : (a,b) => {
        return a*b;
    },
    remainder : (a,b) => {
        return a%b;
    },
    division : (a,b) =>{
        return a/b;
    },
    subtraction : (a,b) => {
        return a-b;
    }
}

//creating function which will accept object as its argument.
function calculator(calculate){
    return calculate;
}


/*output for the sum*/
console.log(calculator(calculatorObject.sum(5,4)));

/*output for subtraction*/
console.log(calculator(calculatorObject.subtraction(6,3)));

/*output for remainder*/
console.log(calculator(calculatorObject.remainder(8,3)));

/*output for division*/
console.log(Math.floor(calculator(calculatorObject.division(512,5))));


/*output for multiplication*/
console.log(calculator(calculatorObject.mulitplication(2,2)));

