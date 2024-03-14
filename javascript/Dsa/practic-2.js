// // var array=[1,4,7,2,6,3,5]
// var array=["virat","rohit","abd","siarj"]

// function sortedArray(string){
//     let sorted=string.sort()
//     // sorted.reverse()
//     return sorted
// }
// sortedArray(array)
// console.log(sortedArray(array));





// function factorial(array){
//     var result=1
//     for(var i=array; i>0; i--){
//         result *=i
//     }
//     return result
// }
// factorial(2)
// console.log(factorial(2));





// var array=[1,2,3,4,5]
// var result=0;

// function addition(number){
//     for(s of number){
//         result = result + s
        
//     }
//     console.log(result); 
// }
// addition(array);







// var array="12124121"


// function palindom(string){
//    for(var i=0; i<Math.floor(string.length/2); i++){
//     if(string[i] != string[string.length-1-i]){
//         return "not palinrome"
//     }

//    }
//    return "palindrom"
// }
// palindom(array)
// console.log(palindom(array));



// var array=[1,2,3,4,5,1,4,2,3,4,5,5]
// var target=6;

// function addtwonumbr(array,target){
//     for(var i=0 ; i<array.length-1; i++){
//         for(j=i+1; j<array.length ; j++){
//             if(array[i] + array[j] == target){
//                 console.log(array[i] , array[j])
//             }
//         }
//     }
// }
// addtwonumbr(array,target)







// var array="shabaj"
// var number=[1,2,3,4,5]
// var object={age:"23",myname:"sk"}


// function findvalues(value){
//     let arr=value.age.includes(value.aaage)
//     return arr
// }
// findvalues(object)
// console.log(findvalues(object));



// var array=["shabaj","virat","rohit","abd"]

// function findindexvalue(array){
//     let value=array.indexOf("virat")
//     return value
// }
// findindexvalue(array)
// console.log(findindexvalue(array));





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





// var array=[2,3,4,5,6,7]

// function isPrime(number){
//     if(number > 1){
//         // return "prime mnumber"
//         for(var i=2; i<number; i++){
//             if(number % i === 0){
//                 return false
//             }
//         }
//         return true
//     }
//     // return " not a prime number"
// }
// const primenumber=array.filter(isPrime)
// console.log(primenumber);








// var array=[1,2,3,4,5,6,7,97]

// function isprime(number){
//     if(number > 1){
//         for(var i=2; i<number; i++){
//             if(number %  i === 0){
//                 return false
//             }
//         }
//         return true
//     }
// }
// const primevalue=array.filter(isprime)
// console.log(primevalue);
// isprime(array)





// var array=[1,2,3,54,6,7,8]
// var odd=[];
// var even=[];

// for(var i=0; i<array.length; i++){
//     if(array[i] % 2 ===0){
//         even.push(i)
//     }else{
//         odd.push(i)
//     }
// }
// console.log(even);
// console.log(odd);


// var array=[1, -2, 3, 4, -5]
// var sum=0
// for(a of array){
//     if(a > 0){
        
//         // console.log(array[i])
//         sum = sum+a
        
//     }
//    console.log(sum);
// }



// var array=[1, -2, 3, 4, -5]
// var array=[1,2,3,4,5,6]
// var sum=0;

// function addition(array){
//     for(a of array){
//         if(a > 0){
//             sum=sum+a
//         }
//     }
//     console.log(sum); //sum
// }
// addition(array)


// var array=[1,2,3,4,5,6]
// var sum=0;

// function addition(value){
//     for(a of value){
//         sum = sum+a
//     }
//     console.log(sum);
//     // return sum
// }
// addition(array)
// console.log(addition(array));


// var array=[2,3,4,5,6,78,1,97,21]

// function isPrime(value){
//     if(value > 1){
//         for(var i=2; i<value; i++){
//             if(value % i === 0){
//                 return "not prime number"
//             }
//         }
//         return "prime number"
//     }
    
// }
// // isPrime(array)
// const primenumber=array.filter(isPrime)
// console.log(primenumber);
// isPrime(1)




// var array=[1,2,3,4,5,6,7,97]

// function isprime(number){
//     if(number > 1){
//         for(var i=2; i<number; i++){
//             if(number %  i === 0){
//                 return false
//             }
//         }
//         return true
//     }
// }
// const primevalue=array.filter(isprime)
// console.log(primevalue);




// var array=[2,3,4,5,6,78,1,97,21]


// function isPrime(value){
//     if(value > 1){
//         for(var i=2; i<value; i++){
//             if(value % i ===0){
//                 return false
//             }
//         }
//         return true
//     }
// }
// const primevalue=array.filter(isPrime)
// console.log(primevalue);

//console,log(isPrime(array))




// var array=[12,,2,3,4,5,67,7,9,0,67,5,3,2]


// function isPrime(number){
//     if(number > 1){
//         for(var i=2 ; i<number ; i++){
//             if(number % i === 0 ){
//                 return false
//             }
//         }
//         return true
//     }
// }
// // isPrime(array)

// const priemvalues=array.filter(isPrime)
// console.log(priemvalues);






// var arr ="malayalam"


// function palindrom(string){
//     for(var i=0; i<Math.floor(string.length/2); i++){
//         if(string[i] != string[string.length-1-i]){
//             //console.log("not palindroem")//
//             return "palindrom"
//         }
//     }
//     // console.log("palindroem");// "palindrome"
//     return "palindrom"
// }
// palindrom(arr)
// console.log(palindrom(arr));



// var array=[1,2,3,4,5,5,1,2,3,4,5,4,5]
// var array=["a","a","b","c","d","b","c","d"]

// function removedubliat(remove){
//     let result=[...new Set(remove)]
//     console.log(result);
// }
// removedubliat(array)



// var array="hello"

// function remove(value){
//     var result=value.split('')
//     //   var result =value.join("")
//     result=[...new Set(value)]
    
//     console.log(result.join(''));
// }
// remove(array)




// var array={age:"20",myname:"sk"}
// var array=["a","b","d"]

// array.splice(2,0,"s")
// console.log(array);

// var array=[1,5,2,3,6,8,4,3]
// array.sort()
// console.log(array.length);


// function finvalue(array){

//     // let result=array.age.includes(array.age)
//     let result=array.splice(2,0,"s")

//     console.log(result); //result
// }
// finvalue(array)
// console.log(finvalue(array));






// function fact(value){
//     var result=1;
//     for(var i=value; i>0; i--){
//         result *=i
//     }
//     return result
// }
// fact(5)
// console.log(fact(5));