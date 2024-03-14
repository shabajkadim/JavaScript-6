// setTimeout(()=>{
//     console.log("hello ..1")
// },"")

// setTimeout(()=>{
//     console.log("hello...2");
// })

// setTimeout(()=>{
//     console.log("hello...3");
// },2000)

// console.log("hello...4")





// const myInterval= setInterval(()=>{
//     console.log("hello");
// },2000)

// function stopinterval(){
//     clearInterval(myInterval)
// }

// setTimeout(stopinterval,6000)


// var arrey=[1,2,3,4,5.6]

//                        <===========FindIndex=========>

// const myindex=arrey.findIndex((number)=>number==3)

// console.log(myindex);

// const myindex=arrey.findIndex((number)=> number==7)

// console.log(myindex);




//  const mynames=["s","a","K","r","k","m"]
//  const mynames=[1,2,3,4,5,6,7,8,1,2,3,4,5]


//  const element=mynames.findIndex((alpha)=>alpha == "r")
//  const element=mynames.findIndex((alpha)=>alpha == "k")
//  const element=mynames.findIndex((alpha)=>alpha < 4)

//  console.log(element)







//           <=======    Find   =======>

// var arrey=[1,2,8,3,4,5.6]

// var result=arrey.find((number)=>number > 5)
// console.log(result);



// var array =[2,3,4,7,6,2,3,5,6,6,7,8,10,20,30]

// var result=array.find((elemet)=>elemet > 3)
// console.log(result);



//       <====== map =======>
// var array=[1,2,3,4,5]

// const result=array.map((number)=>number * 2)

// console.log(result);


// var array=[1,2,3,4,5,6,7,8]

// const result=array.map((element)=>element + 2)
// var result=array.map((element)=>element > 4)

// console.log(result);



// var array=[1,2,3,4,5]

// const result=array.map((number)=>number > 2)

// console.log(result);



//    <======= forEach =======>

// var array=[1,2,3,6,4,5,6]

// const result=array.forEach((num)=>{
//     if(num > 4){
//         console.log(num);
//     }
// })

var array=[1,2,4,4,3,4,5,5,6,6]

var result=array.forEach((element)=>{
    if(element > 3){
        console.log(element);
    }
})