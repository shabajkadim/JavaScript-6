// function odd(value){
//     var sum=0
//     for(var i=1 ; i<=value ; i++){
//         if(i % 2 == 1){
//             sum +=i 
//         }
//     }
//     return sum
// }
// odd(15)
// const add=odd(15)
// console.log(add,"number(15)");



// function addition(value){
//     var odd=0;

//     for(var i=1; i<=value; i++){
//         if(i%2== 1){
//             odd +=i
//         }
//     }
//     return odd
// }
// addition(15)
// const result =addition(15);
// console.log(result,"result");


// var value="aabbaa"


// function palindrom(string){
//     for(var i=0; i<Math.floor(string.length/2) ; i++){
//         if(string[i] != string[string.length-1-i]){
//             return "not a palindrome"
//         }
//     }
//     return "it,s a palindrome"
// }
// palindrom(value)
// console.log(palindrom(value));


// var friends=["virat","rahul","rohit","siraj","Abd"]

// c
var number=[1,2,34,6,67,78,53,0,4,67,89,3,45,1]

function sortedArrey(arrey){
    let result=0;
    for(let i=0; i<arrey.leght; i++){
        result += i;
        console.log(result);
    }
    return result
}
sortedArrey(number);
const value=sortedArrey(number)
console.log(value); 