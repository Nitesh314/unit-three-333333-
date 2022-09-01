

let user_arr=[];

class user{
  
  #password;  //this is use for private proiperty to access methodes property;

    constructor(){

        this.organization="masai";

        //username & password being added here using line number (99,100)
    }


    #validateusername(username){ //# is a encpsulation are use to make private mathodes;

        // if and else useing tarnary opperator

      let value = username.includes("@") ? false : true;

      return value;
        
    }
    //# are using private file this ius called Encapsuletion

    #validatepassword(password){


    

       let value = password.includes("123") ?  false : true;

       return value
    }

    // write login methodes;

    login(username,password){

        if(username==this.username && password==this.#password)
        {
          console.log("Login successfully")
        }
        else{
          console.log("Authentication failed")
        }
    }

    //write methode
    // parent methode;

    singUp(username,password){
        
        //we need to validate what user types

         //we need to check two think  1.username , 2. passwod;
        
        let isvalidated = false;  

       isvalidated = this.#validateusername(username) && this.#validatepassword(password) 

    
    if(isvalidated)
    {
        this.username=username;
        this.#password=password;

         console.log("User registered succesfully");
           
         user_arr.push(this)
    }
    else{
        console.log("Please enter correct details");
    }
         
  }

  
}


let u1= new user()

// let u2= new user()

// let u3= new user()


u1.singUp("pablo","pabloPandey")

u1.login("pablo","pabloPandey")

console.log(u1)


// u2.singUp("saktiman","gita")

// u3.singUp("saktiman","gita")





// how to encapstulation methodes using # in methode function 

//how to encaptulation propertys ? how to make them private;


//******************************************End Login and Singup******************************* */

//  creating student class    start


class student extends user{
    
   constructor(){
     
    super();
    this.numofAssignments = 0;
       

   }    

submitAssignment(){
  
  this.numofAssignments++;
  console.log("Accepted")

}
}

class admin extends user{
    
  constructor(){

    super();

  }

  removeuser(username){

     //remove person with user;

     user_arr=user_arr.filter((element)=>{

      return element.username !=username

     });
     
  }
}

let s1=new student()

s1.singUp("nitesh2","shukla2")

s1.login("nitesh2","shukla2")

s1.submitAssignment()
s1.submitAssignment()



console.log(s1.numofAssignments)

let a1=new admin();

a1.singUp("nitesh","shukla")
a1.login("nitesh","shukla")

a1.removeuser("nitesh")

console.log(user_arr)