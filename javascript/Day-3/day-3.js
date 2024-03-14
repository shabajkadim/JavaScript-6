// condition Statement 
syntax
if(contion ) { 
    statement
}else{
    stament 
}

if(2 == 2){
    console.log("condition is true")
}else{
    console.log('conditon is false ')
}

if(30 <= 40/2){
    console.log("condition is true");
}else{
    console.log("condition is false");
}

const value1 = 31;
const value2 = 20;
const value3 = 30;

if(value1 > value2){
    console.log("value 1 is greater than value 2 ");
}else if(value3 < value1){
    console.log("value 3 is lesser than vealue 1   ");
}else{
    console.log("value 1 is lesser than value 2 and value 3");
}

// age limit < 18 = you alow the  L.
// age limit < 80 = you not alow the L.
// age limit <= 18 = you alow for no L.
// age limit < 18 = you alow for LL.

var age =20;

if(age == 18){
    console.log("alow for LL");
}else if (age > 18 && age < 90){
    console.log("alow for L" );
}else{
    console.log("not alow for L");
}

var age =95;

if(age == 18){
    console.log("alow for LL");
}else if (age > 18 && age < 90){
    console.log("alow for L" );
}else{
    console.log("not alow for L");
}

var age =18;

if(age == 18){
    console.log("alow for LL");
}else if (age > 18 && age < 90){
    console.log("alow for L" );
}else{
    console.log("not alow for L");
}

var age =15;

if(age == 18){
    console.log("alow for LL");
}else if (age > 18 && age < 90){
    console.log("alow for L" );
}else{
    console.log("not alow for L");
}