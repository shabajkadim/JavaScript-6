//Q . given string is pallindrome or Not.


// var myName = "absaafsba"

// console.log(myName[myName.length - 1])

// function isStringPalindrome(string) {
//     for (var i = 0; i < Math.floor(string.length / 2); i++) { // run 2 times
//         console.log(string[i], string[string.length - 1 - i])
//         if (string[i] !== string[string.length - 1 - i]) {
//             return "Not palindrome"
//         }
//     }
//     return "Its a Palindrome"
// }
// console.log(isStringPalindrome(myName))

// var stringvalue="abbbba";

// function pallindrome(array){
//     for(let i=0; i<array.length/2; i++){
//         // console.log(array[i])
//         if(array[i] != array[array.length-1-i]){
//             return "not a palindrome"
//         }
//     }
//     return "it's a palindrom value"
// }
// console.log(pallindrome(stringvalue));//

var value="malayalam"

function palindrom(string){
    for(let i=0; i<Math.floor(string.length/2); i++){
        console.log(string[i],string[string.length-1-i])
        if(string[i] != string[string.length-1-i]){
            return "not pallindrome"
        }
    }
    return "it's pallindrome "
}
console.log( palindrom(value));