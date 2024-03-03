console.log("hey i am on a tutorial for loop")
let a=1;
for (let i = 0; i < 100; i++) {
console.log(a+i)    
}
let obj={
    name :"inder",
    role:"learner",
    company:"coding",
}
for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
        
    }
    for (const char of "inder") {
        console.log(char)
    }
    let i=5;

    while (i<10) {
        console.log("inder")
        i++;
    }
    let m=5;
    do {
        console.log("harjeet")
    } while (i<5);//it print value beforee checking condition so now where condition is false but it give one output 
