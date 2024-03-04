function nice(name){
    console.log("hey "+name+" is good coder")
    console.log("hey "+name+" good web-developer")

}
nice("raspreet")
nice("nindu")
function sum(a,b,c=3){
    console.log(a,b,c)
// console.log(a+b)
return a+b+c
}
result = sum(3,5)
result1=sum(5,6)
result2=sum(6,3,1)
console.log("the sum of these numbers is:",result)
console.log("the sum of these numbers is:",result1)
console.log("the sum of these numbers is:",result2)

//arrow function:=

const func1 = (a)=>{
    console.log("hey i am arrow function",a)
}
func1(34);
func1(54);
func1(24);

