 let userName=prompt("Enter your name please") ;
 let     userAge=prompt("Enter your age") ;
 let    userGender=prompt("Enter your gender");

 
function userGender1(userGender){

    if (userGender=="Female" || userGender == "female"){
        return "Ms"


    }
    else if (userGender=="Male" || userGender == "male"){
        return "Mr"
   
    }
    else{
        return prompt("It should be female or male")
    }

}

function userAge1(userAge){

    if (userAge > 0){
        return userAge
    }
    else{

        return alert("The age should above 0")
    }
}

 let confirm=confirm("do you want a welcome")
 
console.log(userName,userGender1(userGender),userAge1(userAge))




 
