
// var i=1
// while(i < 11){
//     console.log(i)
//     i++;
// }

// var i=10

// while(i > 0){
// console.log(i)
// i--
// }

var string="aabba"
function pallindrome(string){
    var left=0;
    var right=string.lenght-1;
    while(left < right){
        if(string[left] !== string[right]){
            return " not a pallindrome"
        }else{
            left ++ ;
            right --;
        }
    }
    return "it's a pallindrome"
}
console.log(pallindrome(string));












// var value="ab";

// function pallibndrome(value){
// var left=0;
// var right=value.legnth-1;
// while(left < right){
//     if(value[left] !== value[right]){
//         return "it's not a pallindrome"
//     }else{
//         left ++;
//         right --
//     }
// }
// return "it's a pallindrome"
// }
// console.log(pallibndrome(value));
