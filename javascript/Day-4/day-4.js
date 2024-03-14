const age = 95;

if(age <18 ){
    console.log("not alloew for L")
}
else if(age ==18 ){
    console.log("allow for LL");
}
else if(age > 18){
    if(age < 80){
        console.log("age allow for Dl");
    }else{
        console.log("age is 80+ becouse not allow for DL");
    }
    console.log("allow for Dl");
}

var count =1;
count=2
count=count+1;
count++
console.log(count);

for(let count=4; count < 10; count+=5 ){
    console.log("hiiii");
}

for(var i=10; i>0; i-=2){
    console.log(i)
}

const evennumber=0;

const odd=0;

for(let i=1; i<=10; i++){
    if(i%2==0){
        console.log(i,"even")
    }else{
        console.log(i,"odd");
    }
}

var addoddno=0;

for(var i=10; i<15; i++){
    if(i%2 == 1){
        addoddno += i;
    }
}
console.log(addoddno);


