
class queue{

    constructor(){
    this.length=0;
        this.queue_arr=[];
    }

    enQueue(ele){

   //     ele.forEach((element)=>{


            this.queue_arr.push(ele)
             this.length++;

      //  })

        

        return this.queue_arr;
    }

    deQueue(){

        if(this.isEmpty())

       // this.length--;

        return "underflow"
       
        
        return this.queue_arr.shift();

        
    }

    front(){

        if(this.isEmpty())

        return "No elements in Queue";

        return this.queue_arr[0];
    }

    isEmpty(){

        return this.queue_arr.length==0
    }

    printQueue(){

        var str="";

        for(var i=0;i<this.queue_arr.length;i++)
        {
            str+=this.queue_arr[i]+" ";

            return str
        }
    }

    length(){
      return this.printQueue.length
    }

}

// creating object for queue class
var output = new queue();

console.log(output)

// // Testing dequeue and pop on an empty queue
// // returns Underflow
 console.log(output.deQueue())


// // returns true

 console.log(output.isEmpty());


// //Adding elements to the queue

output.enQueue(5)

output.enQueue(51)







 console.log(output.front())


// // removes first element in  it is (5) from the queue_arr


 console.log(output.deQueue());



// //printing the elements of the queue

 console.log(output.printQueue());


 console.log(output.length)