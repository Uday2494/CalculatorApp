let inputElt=document.getElementById("inputBox");
let buttonElt=document.querySelectorAll("button");

let string="";
let arr=Array.from(buttonElt);
arr.forEach(buttonElt=>{
    buttonElt.addEventListener("click",(e)=>{
        if (e.target.innerHTML=="="){
            string=eval(string);
            inputElt.value=string;
        }

        else if(e.target.innerHTML=="AC"){
            string="";
            inputElt.value=string;
        }

        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            inputElt.value=string;
        }

        else{
            string+=e.target.innerHTML;
            inputElt.value=string;
        }

    })
})