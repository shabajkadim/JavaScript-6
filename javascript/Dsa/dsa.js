// 1-20 addition odd number

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








// function fact(value){
//     var num=1;
//     for(var i=value; i>=1; i--){
//         num *=i
//     }
//     return num
// }
// fact(5)
// const result=fact(5)
// console.log(result)


// for(var i =20 ; i<=40; i+=10){
//     for(var j=30; j<=50; j+=10){
//         console.log(i , j )
//     }
// }







// Q find addition of two num,bwer giver arrey

// var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];

// var target=12;

// function addition(array,target){
//     for(var i=0; i<=array.length-2; i++){
//         for(var j=i+1; j<=array.length-1; j++){
//             if(array[i] + array[j] == target){
//                 console.log (array[i], array[j])
//             }
//         }
//     }
// }
// addition(array, target)








//    <=========== palindrome ==========> 

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











            // <====== SORTED ARREY  =====>

// var friends=["virat","rahul","rohit","siraj","Abd"]

// const sorteArrey=(array)=>{
//     for(let i=0; i<array.length; i++){
//         array.sort()
//     console.log(array)
//     array.reverse()
//     console.log(array)
//     }
//     return array
// }
// console.log(sorteArrey(friends))






// Q. <==========  sorted ayyey ======>

// var number=[1,2,34,6,67,78,53,0,4,67,89,3,45,1]

// function sortedArrey(arrey){
//     let result=0;
//     for(let i=0; i<arrey.leght; i++){
//         result += i;
//         console.log(result);
//     }
//     return result
// }
// sortedArrey(number);
// const value=sortedArrey(number)
// console.log(value); 








// function fact(value){
//     var num=1;
//     for(var i=value; i>=1; i--){
//         num *=i
//     }
//     return num
// }
// fact(5)
// const result=fact(5)
// console.log(result)







// var number=[1,2,3,5,6,54,76,8,8,9]

// function sorted(arrey){
//     // var num=0;
//     for(var i=0; i<arrey.length; i++){
//         // num +=arrey[i]
//         arrey.sort()
//         // console.log(num);
//         // num +=i
//         // num.sort()
//         console.log(arrey)
//     }
//     return arrey
//     // return num
// }
// sorted(number)
// const result=sorted(number);

// console.log(result);







//  ,<===========  Prime number ======>
 
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







// var list=[2,3,,56,79,2,31,,3,45,67,8,21,,46,7,8,97]

// function isprime(array){
//     if(array > 1){
//         for(let i =2; i<array; i++){
//             if(array% 2 === 0){
//                 return false
//             }

//         }
//     }
//     return true
// }

// const priemvalue=list.filter(isprime)

// console.log(priemvalue);



// <=========== Binary Search ========>
// var array=[1,2,3,4,5,6,7,8,9]
// var target=4;

// function BinarySearch(array, target){
//     let left=0;
//     let right=array.length-1;

//     while(left <= right){
//         const midIndex=Math.floor(left + right /2)
//         const midValue=array[midIndex]
//         console.log(midIndex,"midindex",midValue,"midvalue");

//         if(midValue === target){
//             return (midIndex)
//         }else if(midValue < target){
//             left =midIndex + 1
//         }else{
//             right=midIndex - 1
//         }
//     }
//     return "not found"
// }
// console.log(BinarySearch(array,target));








// var array=[1,2,3,4,5,6,7,8,9]
// var target= 7;

// function binarySearch(array,target){
// var left=0;
// var right=array.length-1;
//     while(left <= right){
//     const midIndex= Math.floor((left + right) / 2)
//     const midValue=array[midIndex]
//     if(midValue === target){
//         // console.log(midIndex,"got it");
//         return midIndex
//     }else if(midValue < target){
//         // console.log(left);
//         left = midIndex + 1
//     }else{
//         // console.log(right);
//         right=midIndex - 1
//     }
//     }
// return "not Found"
// }
// console.log(binarySearch(array,target));





// var array=[1,2,3,4,5,6,7,8,9]

// var target=4;

// function BinarySearch(array,target){
// var left=0;
// var right=array.length-1
// while(left <= right){
//     let midIndex=Math.floor((left + right )/2)
//     let midValue=array[midIndex]

//     if(midValue === target){
//         return midIndex
//     }else if(midValue < target){
//         left =midIndex + 1
//     }else{
//         right = midIndex - 1
//     }
// }
// return "not"
// }
// BinarySearch(array,target)
// console.log(BinarySearch(array,target));





var array=[1,2,3,4,5,6,7,8,9]
var target=10;



function BinarySearch(array, target){
let left=0;
let right=array.length-1;
while(left <= right){
    const midIndex= Math.floor((left + right )/2)
    const midValue=array[midIndex]

    if(midValue === target){
        return midIndex
    }else if(midIndex < target){
        left = midIndex + 1
    }else{
        right = midIndex - 1
    }
}
return "not found"
}

BinarySearch(array,target)
console.log(BinarySearch(array,target));