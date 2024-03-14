
function CheckIsUserValid(){
    var age=document.getElementById("age").value
    // console.log(age ,"Age");
    const divTag=document.getElementById("displayresult")

    if(age > 18 && age < 81){
        divTag.innerText=("Your are eligible for DL")
        divTag.style.color="grey"
        divTag.style.backgroundColor="white"
        divTag.style.fontSize="30px"
        divTag.style.marginTop="50px"
        divTag.style.width="500px"
        divTag.style.boxShadow="10px 10px 40px 6px  black"
        alert("Your are eligible for DL")
    }else if(age == 18){
        divTag.innerHTML=("your eligible for LL")
        divTag.style.color="grey"
        divTag.style.backgroundColor="white"
        divTag.style.fontSize="30px"
        divTag.style.width="500px"
        divTag.style.marginTop="50px"
        divTag.style.boxShadow="10px 10px 40px 6px  black"
        alert("your eligible for LL")
    }else{
        divTag.innerText=("Your not eligible for DL")
         divTag.style.color="grey"
        divTag.style.backgroundColor="white"
        divTag.style.width="500px"
        divTag.style.fontSize="30px"
        divTag.style.marginTop="50px"
        divTag.style.boxShadow="10px 10px 40px 6px  black"
        alert("Your not eligible for DL")
    }
   
    document.getElementById("age").value = ""
   
}