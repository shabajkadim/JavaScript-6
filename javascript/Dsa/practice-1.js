// Write a function sumPositiveNumbers that takes an array of numbers as input and
// returns the sum of all positive numbers

// var array= [1, -2, 3, 4, -5]

// function addition(number){
//     for(var i=0; i<number.length; i++){
//         // console.log(number);
//         if(number >= 0){
//             return number
//         }
//     }
//     return number
// }
// console.log(addition(array));

// let array=[1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,2,3,3,4,5,6]

// let sortedarr=[...new Set(array)]

// console.log(sortedarr);


// var array={age:"20",myName:"shabaj",vilage:"donewadi"}
// var number=[1,2,3,4,5,7]
// console.log(array.includes(array.age));

// console.log(number.includes(2));


// var array="asbsa";

// function palindrome(number){
//     for(var i=0; i<number.lenght/2; i++){
//         if(number[i] !== number[number-1-i]){
//             return "not a palindroem"
//         }
//     }
//     return "it,s a palindrome"
// }
// palindrome(array)

// console.log(palindrome(array));






// var array=[1,2,3,5,4,3,2,4]
// var target=6

// console.log(array);

// function addition(array,target){
//     for(var i=0; i<array.length-1;i++){
//         for(var j=i+1; j<array.length; j++){
//             if(array[i] + array[j] == target){
//                 console.log(array[i] , array[j]);
//             }
//         }
//     }
// }
// addition(array,target)

// var array=[1,2,3,4,5,6,7,8,8]

// let sortedArray=[...new Set(array)]

// console.log(sortedArray);

// var array=[1,2,3,4,5,6,7,8,8]

// const reversed=array.reverse();

// console.log(reversed);


// var array=[1,2,3,10,4,3,4,2,1,5,6,7,8,8]

// const  ascending=array.sort((a,b)=>a-b)
// const descending=array.sort((e,f)=>f-e)

// console.log(descending);


// var array="malayalam"

// function palindrom(string){
//     for(var i=0; i<string.length/2; i++){
//         if(string[i] != string[string.length-1-i]){
//             return "not palindrome"
//         }
//     }
//     return "palindrom"
// }
// // palindrom(array)
// console.log(palindrom(array));


// var x="hello"

// let a=[...new Set(x)]
// a=a.join('')

// console.log(a);


// var arr=[1,2,3,5,7,8,3,2,4]

// function sortedArr(array){
//     let sorted=array.sort((a,b)=>b-a);
//     return sorted
// }
// console.log(sortedArr(arr));


// var array=[2,1,3,54,6,3]

// console.log(array.sort((a,b)=>b-a));




// function fact(value){
//     var num=1;
//     for(var i=value; i>=1; i--){
//         num *=i
//     }
//     return num
// }
// fact(5)
// console.log(fact(5));





// function fact(number){
//     var sum=1;
//     for(var i=number; i>0; i--){
//         sum *=i
//     }
//     return sum
// }
// fact(5)
// console.log(fact(5));







// // var array="121121"
// var array="malyalam"

// function palindrome(array){
//     for(var i=0; i<Math.floor(array.length/2); i++){
//         if(array[i] != array[array.length-1-i]){
//             return "not p"
//         }
//     }
//     return "p"
// }
// palindrome(array)
// console.log(palindrome(array));








// function fact(number){
//     var sum=1;
//     for(var i=number; i>0; i--){
//         sum *=i;
        
//     }
//     return sum
// }
// fact(5)
// console.log(fact(5));




// var array=[1,2,3,4,5,1,2,3,4,1,2,3,4,2]

// function Sortvalue(value){
//     let string=[...new Set(value)]
//     return string
// }
// Sortvalue(array)
// console.log(Sortvalue(array));


// var string=["ab","bc","cd","abc","abd"]

// function sortarray(array){
//     var sorted=array.sort()
//     sorted=sorted.reverse()
//     return sorted
// }
// sortarray(string)
// console.log(sortarray(string));




// var array={age:"20", myname:"sk"}
// var number=[1,23,5,4,2]
// console.log(array.age.includes(array.age));


// function checkkey(arr){
//     let value=arr.age.includes(arr.aage)
//     return value ,"false is here"
// }
// checkkey(array)
// console.log(checkkey(array));





// var array=[1,2,3,4,5,6]

// function addition(value){
//     var sum=0
//     for(var i=value; i>0; i--){
//         sum =sum + i
//         return sum
//     }
// }
// addition(array)
// console.log(addition(array));




var array=[1,2,3,4,5,6]
var result=0

function addition(array){
    for(value of array){
        result = result + value
        
    }
    return result
}
// addition(array) 
console.log(addition(array));



// var array=[1,2,3,4,5]
// var result=0;

// function sum(array){
//     for(val of array){
//         result = result + val
//     }
//     return result;
// }
// console.log(sum(array));







var array=[1,2,3,4,5,6]

var result=0;

function addition(value){
    for(s of value){
        result = result + s

    }
    return result
}
addition(array)
// console.log(addition(array))
