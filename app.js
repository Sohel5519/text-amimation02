

let text = document.getElementById("text");
let new_text = "I am freelancer sohel";

setInterval(fun,200);
let index = 0;
function fun(){

    text.innerHTML = new_text.slice(0,index ++);

    if(index > new_text.length){
        index = 0;
    }

}

