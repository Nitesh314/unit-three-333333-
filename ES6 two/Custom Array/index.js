

class stack{

    constructor(){

        this.length=0;
        this.stack_arr=[];
    }

    push(...ele){

        ele.forEach((element)=>{
            this.stack_arr.push(element);
            this.length++;

        })
    
        return this.stack_arr;
    }

    pop(){

     let remove= this.stack_arr.pop();
        this.length--;

        return remove;
    }

 
  
}

let output=new stack();

output.push(1,2,3,4,5,6,7,8)
output.pop()

console.log(output)
