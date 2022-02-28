// MODULE #2

// console.log('it works!');

// 2.13 Custom Functions

    // // Function Definition
    // function calculateBill() {
    // // this is the function body
    //     console.log('Running Calculate Bill!!!');
    //     const total = 100 * 1.13;
    //     console.log('What should be retuned on the next line: <' + '\u2022 ' + total);
    //     return total;
    // }

    // const myTotal = calculateBill();
    // console.log(`Your Total is $${myTotal}`);

    // console.log(`NOW Your Total is $${calculateBill()}`)

    // Function Call, or **Run**
    //calculateBill();

// 2.14 Parameters and Arguments

    // Parameters -> Placeholders
    // Arguments -> Actual values

function calculateBill(billAmount, taxRate = 0.05, tipRate = 0.15) {
    console.log(billAmount, taxRate, tipRate)
    const total = (billAmount * (1 + taxRate)) + (billAmount * tipRate);
    return total;
}

const briTotal = 500;
const briTaxRate = .30;
const myTotal = calculateBill(100);
console.log(myTotal);


console.log ("Another Example:");


//const firstName = 'Brian'; leave commented out and see next comment
// Function Definition
function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

const greeting = sayHiTo('Brian'); 
// even without explicitly creating the variable for firstName, if I pass this string as an argument for this function call the function will still look for a variable of that name, but when it doesn't find it, it will create one on it's own.

console.log(greeting);

console.log ("Another Example:");

function doctorize(name) {
    return `Dr. ${name}`;
}

console.log(doctorize('Brian'));

function yell(name = 'Silly Goose') {
    return `HEY! ${name.toUpperCase()}!`
}

console.log(yell ('Brian'));
