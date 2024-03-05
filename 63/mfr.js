let arr=[1,2,3,1,2,31,13];
// rather than do following all use map
// let newarr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }
let newarr = arr.map((e,index,arr)=>{
    return e**2
})
console.log(newarr)
const greaterthanseven = (e)=>{
if(e>7){
    return true
}
return false
}
console.log(newarr.filter(greaterthanseven))

let arr2=[1,2,3,2,4,5]
const red=(a,b)=>{
    return a+b
}
console.log(arr2.reduce(red))
// Array.from("inder") this is used to make an arr ['i','n','d','e','r']
