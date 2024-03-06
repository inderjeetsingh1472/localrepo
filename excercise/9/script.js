/*
create a faulty calculator using java script:

this faulty calculator does following:
1.it takes two numbers as input from the user;
2.it performs wrong operation as folows:
+ ------> -
* ------> +
- -------> /
/ -----> **
it perform wrong operation 10% of the time


 */
let random = Math.random()
let a = prompt("enter first number");
let b = prompt("enter second number")
let c = prompt("enter operation")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
console.log(random)

if (random > 0.1){
    alert(`the result is ${eval(`${a}${c}${b}`)}`)
}
else{
    c=obj[c]
    alert(`the result is ${eval(`${a}${c}${b}`)}`)

}