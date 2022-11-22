////////////////////////////////
// პირველი დავალება
function isEqual(a, b) {
    if (a === b) {
        return "ტოლია"
    } else {
        return "არ არის ტოლი"
    }
}
console.log(isEqual("i", "i")); // ტოლია
console.log(isEqual(5, "5")); // არ არის ტოლი
console.log(isEqual(5, 5));//ტოლია

////////////////////////////////
//მეორე დავალება
function convertFtoC(fahrenheit) {
    let celsius = Math.floor(5 / 9 * (fahrenheit - 32));
    if (typeof (fahrenheit) === "number") {
        return celsius;
    } else {
        return false;
    }
}
console.log(convertFtoC(88));//31 celsius
console.log(convertFtoC("one"));//false

////////////////////////////////
//მესამე დავალება
function calculator(a, b, operation) {
    if (operation === "+" && typeof a == "number" && typeof b == "number") {
        return a + b;
    } else if (operation === "-" && typeof a == "number" && typeof b == "number") {
        return a - b;
    } else if (operation === "/" && typeof a == "number" && typeof b == "number") {
        return a / b;
    } else if (operation === "*" && typeof a == "number" && typeof b == "number") {
        return a * b;
    } else {
        return false;
    }
}
console.log(calculator(2, 5, "+"));//7
console.log(calculator("+"));//false
console.log(calculator("5", "5", "+"));//false
console.log(calculator("1", 5, "+"));//false