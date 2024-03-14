

// function addition(number){
//     sum=1
//     for(var i=number; i>0; i--){
//         // if(i %2 ==1){
//         //     sum +=i
//         // }
//         sum *=i
//     }
//     return sum
// }
// addition(5)
// console.log(addition(5));

// const { array } = require("prop-types")



// var number=[1,2,3,4,5,6,7]
// var target=5

// function addition(number , target){
//     for(var i=0; i<number.length-1; i++){
//         for(var j=i+i; j<number.length; j++){
//             if(number[i] + number[j] === target){
//                 console.log(number[i],number[j]);
//             } 
//         }
//     }
// }
// addition(number,target)



// var number=[1,2,3,5,6,54,76,8,8,9]

// function isprime(value){
//     if(value > 1){
//     for(i=2; i<value; i++ ){
//         if(value % i === 0){
//             return false
//         }
//     }
//     return true
// }
// }
// const prime =number.filter(isprime)

// console.log(prime);










// var number=[1,2,3,5,6,54,76,8,8,9]

// function isprime(array){
//     if(array > 1){
//         for(var i=2 ; i<array ; i++){
//             if(array % i ===0){
//                 return false
//             }
//         }
//         return true
//     }
//     // return "not prime number";
// }
// isprime( number)
// const value=number.filter(isprime)
// console.log( value);











// var myName = "absaafsba"
// console.log(myName[myName.length - 1-i])

// function ispallindrome(string){
//     for(let i=0; i<Math.floor(string.length/2); i++){
//         // console.log(string[i],string[string.length-1-i])
//         if(string[i] != string[string.length-1-i]){
//             return "It's not pallindrom"
//         }

//     }
//     return "it's pallindrome"
// }
// console.log(ispallindrome(myName))




// var string="abaa"


// function palindroem(value){
//     for(var i=0; i<Math.floor(value.length/2); i++){
//         if(value[i] != value[value.length-1-i]){
//             return "not"
//         }
//     }
//     return "yes"
// }
// palindroem(string)
// console.log(palindroem(string));






// var array=[1,2,3,5,1,3,5,7,1,34,678,4]

// function sorted(value){
//     const result=value.sort()
//     console.log(result);
// }
// sorted(array)
// console.log(sorted(array));

// var array=[1,2,3,5,1,3,5,7,1,34,678,4]

// function dublicate(value){
//     let result=new Set(value)
//     console.log(result);
// }
// dublicate(array)









// var array=[8,2,3,1,4,4,5,3,4,5,6]
// var newarray={}
// function dublicate(array ){
//     for(var i=0; i<array.length; i++){
//         if(newarray[array[i]] === undefined){
//             newarray[array[i]] =1
//         }else{
//             newarray[array[i]]++   
//         }
//     }
// }
// dublicate(array)
// console.log(newarray);












var number=5


function factorial(value){
    var sum=1
    for(var i=value; i>1; i--){
        sum *=i
    }
    return sum
}
factorial(number)
console.log(factorial(number));