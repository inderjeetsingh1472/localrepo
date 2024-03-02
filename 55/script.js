console.log("hey this is tutorial 2 of js")
var a = 5;
a = a + 1
var b = 6;
var c = "inder"
// var 55a="this is invalid because in this name i use number"
// variables in java script is case senstive like if i write inder and Inder both are different in java script
console.log(a + b + 8 + c)
console.log(typeof a, typeof b, typeof c)
// for making a constant variable means the value of that variable is not change to use any operation use follolwing:-
const a1 = 6;
//a1=a1+1 // here the value of a1 not going to 7 because this is constant variable also console give error;
// now rather than var we use let  because this is going to global variable
let d = 7;
{
    let d = 55;
    console.log(d)
}
console.log(d)
// so now do same thing on var
var e = 5
{
    var e = 66
    console.log(e)
}
console.log(e)//this also show 66
let x = "inderjeet";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)
//  this is output of upper one  "string number number boolean undefined object" note type of null is object because js is very old language
let o = {
    name: "inder",
    "job code": 5600,
    ishandsome:true
}
console.log(o)
o.salary="100 crores"
console.log(o)
o.salary="500 crores"
console.log(o)

