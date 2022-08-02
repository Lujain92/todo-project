 let userName=prompt("Enter your name please") ;
 let     userAge=prompt("Enter your age") ;
 let userGender=prompt("Enter your gender");
 
function userGender1(userGender){
     

    while(true){
        if (userGender=="female" || userGender == "male"){
            if (userGender =="female"){
                return "Ms"
            }
            else{
                return "Mr"
            }
    
    
        }
        
        else{
            
        }
    

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

// let confirm=confirm("do you want a welcome")
 
console.log(userName,userGender1(userGender),userAge1(userAge))


 
