
import navbar from "./components/navbar.js"
// console.log(navbar)
document.getElementById("navbar").innerHTML=navbar

import {getdata,append} from "./components/getch.js"




document.getElementById("search").addEventListener("input",function(){
    debouncing(move,100)
})
    let id;
async function move(){
let over=document.getElementById("search").value
let res=await getdata(`https://www.themealdb.com/api/json/v1/1/search.php?s=${over}`)
 res=res.meals
let container=document.getElementById("container")
container.innerHTML=null
   
append(res,container)
    }
    function debouncing(fun,delay){
       if(id){
        setInterval(id)
       }
       id=setTimeout(function(){
        fun()
       },delay)
    }
