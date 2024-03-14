//addition odd number

// function addition(number){
//     var sum=0;
//     for(var i=1;i<=number; i++ ){
//         if(i % 2 ==1){
//             sum +=i
//         }

//     }
//     return sum
// }
// addition(15)
// const add =addition(15);
// console.log(add,"oddnumber")







//        find the addition of 2 number in the array//

// var array=[1,2,3,4,5,6,7,8,9]
// var target=12

// function sumvalue(sum , target){
//     for(var i=0; i<sum.length-1; i++){
//         for(var j=i+1; j<sum.length; j++){
//             if(sum[i] + sum[j] == target){
//                 console.log(sum[i], sum[j] )
//             }
//         }
//     }
//     // return sum
// }
// sumvalue(array, target)
// // const result=sumvalue(array)
// // console.log(result);




// var array=[1,2,3,1,2,3,4,5,6,4,5,6,7,8,9,5]

// var target=8

// function addition(value,target){
//     for(var i=0; i<value.length-1;i++){
//         for(var j=i+1; j<value.length; j++ ){
//            if(value[i] + value[j] == target){
//             console.log(value[i],value[j])
//            }
//         }
//     }
// }
// addition(array, target)






////    <============   Palindrom ===========>

var string="abcbba"

function pallindrome(value){
    for(var i=0; i<Math.floor(value.length/2); i++){
        if(value[i] === value[value.length-1-i]){
            console.log("palindrem")
        }else{
            console.log("not palindrem");
        }
    }
    return value
}
pallindrome(string)