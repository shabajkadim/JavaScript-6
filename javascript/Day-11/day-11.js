// datatypes - String, number, Boolean 
// varibles - var let const 
// comparision operator - < > == === 
// logical op || && 
// conditional statement if else , switch 
// Loops for - while 
// ++ -- 
// function  - trad, arraow
// console.log();
// typeof()
// undefined 
// Array  
// function
// Nested for loop 
// Object
// event loop 
// setTimeout setInterval clearInterval
// map foreach find findindex
// push pop shift unshift slice and splice
// at split join concat includes sort , template literals


//      <========== template literals ==========>

// var name="virat kohli"

// var number=18

// console.log("my fev plyr is ",(name), "juersy number " ,number );

// console.log(`my fev plyr is ${name} jeursy number is  ${number} `); // template literals





//      <=========== concat() ============>

// var value1=[1,2,3,4,5]
// console.log(value1);

// var value2=[6,7,8,9,10]
// console.log(value2);
// console.log(value1 , value2);
// const value3=value1.concat(value2) /// concat()

// console.log(value3);






//   <========== includes() =========>


// var number=[1,2,3,4,5,6]

// console.log(number.includes(5));
// console.log(number.includes(7));

// var names=["virat","rohit","siraj","abd","sarfaraj"]

// console.log(names.includes("sangu"));
// console.log(names.includes("virat"));
// console.log(names.includes("Rohit"));




//       <============ sort() ==========>

// var names=["virat","rohit","rahul","abd","max","siraj"]

// console.log(names.sort());

// var number=[10,20,30,40,100,200,50]
// // console.log(number);
// // console.log(number.sort());
// console.log(number.sort((a,b)=>a-b));   // => ascending order

// console.log(number.sort((a,b)=>b-a));   // =>descending order





//   <============ join() ==========>


// var names=["virat","rohit","abd","siraj"]
// console.log(names);

// console.log(names.join());
// console.log(names.join(""));
// console.log(names.join(" "));
// console.log(names.join(" - "));






///     <=========== split() =========>

// var string="Awdiz institute vashi navi-Mumbai"

// console.log(string.split());
// console.log(string.split(" "));
// console.log(string.split());

// const word=string.split() //// output => Undefind
// const words=string.split('')
// console.log(words[8]); // output => s
 
// var char=string.split(" ") // output => with space in duble invoter the split() return the char th of string =>navi-mumbai
// console.log(char[3]);  



///     <============ at() ==========>

// var number=[1,2,3,4,5,6,"shabaj"]

// console.log(number.at(0));
// console.log(number.at(4));
// console.log(number.at(6));
// console.log(number.at(-4));
// console.log(number.at(6));

