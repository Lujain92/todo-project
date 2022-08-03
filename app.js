 function userInfo(){
    
    let userName=prompt("Enter your name please") ;

    while(true){
        let userGender=prompt("Enter your gender");
    if (userGender !="male" && userGender != "female"){

       alert("the gender is not male or female, you must enter male or female ")
       continue
    }
    else{
        break;
    }

    }
    

    while(true){
       let  userAge=prompt("Enter your age") ;
       if (userAge <=0){
           alert("your age is wrong")
           continue
       }
       else{
        break;

       }

    }
    let confirmLetter=confirm("Do you went welcome message?")

    if (confirmLetter==true){
        if (userGender="female"){
            alert("Welcome MS"+userName)
    }
        else if(userGender=='male'){
            alert("Wlcome MR"+userName)
        
        



   


        }
        else{
            alert("Ok")
        }

  
       

}  
    
 

 }



 //second requirement
 function threeQuestion(){
    alert("You must answer with yes or no")
    array=[];
    
    first=prompt("are you single?")
    second=prompt("do you love cat?")
    third=prompt("do you live alone?")

     array.push(first,second,third)
     for (let x=0 ; x< array.length;x++){
        if(array[x]!="yes" && array[x]!="no"){
            array[x]="invalid"
        }
        console.log(array[x])
     }
     
     


    
    

 }

userInfo()
threeQuestion()
 
 
 
 
 
