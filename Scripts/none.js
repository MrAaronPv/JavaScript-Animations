// Dead code: This function is never called
function neverUsedFunction() {
    console.log("You will never see this message.");
}

// Dead code: Variables that are declared but never used
let unusedVariable = "I exist for no reason.";
const anotherUnused = 42;

// Dead code: A function that gets redefined but is never used
function meaninglessFunction() {
    return "First version.";
}
function meaninglessFunction() {
    return "Second version.";
}

// Dead code: An if condition that is impossible to be true
if (5 < 3) {
    console.log("This will never run.");
}

// Dead code: A for loop that will never start
for (let i = 10; i < 5; i++) {
    console.log("This will never be executed.");
}

// Dead code: While loop with a false condition
while (false) {
    console.log("Nope, not happening.");
}

// Dead code: Function that calls itself but is never triggered
function recursiveTrap() {
    recursiveTrap();
}

// Dead code: Trying to access a variable before declaring it
try {
    console.log(nonExistentVariable);
} catch (error) {
    // But we never actually declare nonExistentVariable
}

// Dead code: A function that does nothing useful
function doesNothing() {
    let a = 10;
    let b = 20;
    let c = a + b; // But we never use `c`
}

// Dead code: Defining a class that is never used
class UnusedClass {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
}

// Dead code: An event listener that never triggers
document.addEventListener("fakeEvent", function () {
    console.log("This event does not exist.");
});

// Dead code: Function inside an IIFE but never called
(function () {
    function hiddenFunction() {
        console.log("You'll never find me!");
    }
})();

// The only working line
console.log("This is the only line that actually runs.");
